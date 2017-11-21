import React from 'react';
import Head from 'next/head';
import { Provider } from 'mobx-react';

import initStore from '../store';
import i18n from '../lib/i18n';

import Home from './Home';

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
    i18n.locale = this.store.app.locale;
    return (
      <Provider store={this.store}>
        <div>
          <Head>
            <meta charSet="utf-8" />
            <title>Template</title>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
          </Head>
          <Home />
        </div>
      </Provider>
    );
  }
}
