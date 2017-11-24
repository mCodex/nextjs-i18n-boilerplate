import React from 'react';
import { Cookies } from 'react-cookie';

import { inject, observer } from 'mobx-react';
import { Grid, Flag, Menu, Button } from 'semantic-ui-react';

import i18n from '../lib/i18n';

@inject('store') @observer
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
  }

  handleLocaleChange = (lang) => {
    this.props.store.app.locale = lang;
    const cookie = new Cookies();
    return cookie.set('lang', lang, { maxAge: 1000 * 60 * 60 });
  }

  render() {
    return (
      <Grid.Row>
        <Menu inverted fluid>
          <Menu.Item position="right">
            <Button color="black" onClick={() => this.handleLocaleChange('en')}>
              <Flag name="us" />
            </Button>
            <Button color="black" onClick={() => this.handleLocaleChange('pt')}>
              <Flag name="br" />
            </Button>
          </Menu.Item>
        </Menu>
      </Grid.Row>
    );
  }
}

export default Header;
