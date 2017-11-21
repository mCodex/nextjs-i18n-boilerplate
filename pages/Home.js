import React from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import { __ } from '../lib/i18n';

@inject('store') @observer
class Home extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link href="/b" as="/a"><a>{__('Hello World')}</a></Link></li>
          <li><Link href="/a" as="/b"><a>b</a></Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;
