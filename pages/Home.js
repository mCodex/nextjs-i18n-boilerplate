import React from 'react';
// import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import { Grid } from 'semantic-ui-react';

// import Translate from '../components/Translate';

const styles = {
  pictureContainer: {
    height: '100vh'
  }
};

@inject('store') @observer
class Home extends React.Component {
  render() {
    return (
      <Grid.Row style={styles.pictureContainer} columns={1}>
        <Grid.Column>
          <h1> Testing...</h1>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Home;
