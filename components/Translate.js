import React from 'react';
import PropTypes from 'prop-types';

import { inject, observer } from 'mobx-react';

import t from '../lib/i18n';

@inject('store') @observer
class Translate extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }
  render() {
    return (
      <span>{t(this.props.store.app.locale, this.props.text)}</span>
    );
  }
}
export default Translate;
