import React from 'react';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import { Grid } from 'semantic-ui-react';
import { Cookies } from 'react-cookie';

import initStore from '../store';

import Home from './Home';

import Header from '../components/Header';

export default class App extends React.Component {
  static getInitialProps({ req }) {
    if (!req) {
      const cookie = new Cookies();
      return { locale: cookie.get('lang') };
    }
    const locale = req.lang;
    return { locale };
  }

  constructor(props) {
    super(props);
    this.store = initStore();
    if (this.props.locale) {
      this.store.app.locale = this.props.locale;
    }
  }

  render() {
    return (
      <Provider store={this.store}>
        <div>
          <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Template</title>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
          </Head>
          <Grid>
            <Header />
            <Home />
          </Grid>
        </div>
      </Provider>
    );
  }
}
