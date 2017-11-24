const express = require('express');
const next = require('next');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const locales = ['pt', 'en'];

app.prepare()
  .then(() => {
    const server = express();

    server.use(cookieParser());

    server.use(helmet());
    server.use(helmet.hidePoweredBy({ setTo: 'PHP 7.0.0' }));

    server.use((req, res, next) => {  //eslint-disable-line
      const lang = req.cookies.lang || req.query.lang || req.acceptsLanguages(locales);

      if (lang && locales.indexOf(lang) > -1) {
        req.lang = lang;
        if (req.query.lang) {
          res.cookie('lang', lang, {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 2,
          });
        }
      }
      next();
    });

    // server.get('/a', (req, res) => app.render(req, res, '/a', req.query));

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
