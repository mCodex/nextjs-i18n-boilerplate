import React from 'react';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import { Grid } from 'semantic-ui-react';

import initStore from '../store';

import Home from './Home';

import Header from '../components/Header';

import i18n from '../lib/i18n';

export default class App extends React.Component {
  static getInitialProps({ req }) {
    const locale = req.lang;
    return { locale };
  }

  constructor(props) {
    super(props);
    this.store = initStore();
    this.store.app.locale = this.props.locale;
  }

  render() {
    return (
      <Provider store={this.store}>
        <div>
          <Head>
            <meta charSet="utf-8" />
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
