import { Panel } from 'panels-ui';
import List from './list';
import Logo from '../icons/logo';
import React from 'react';
import Status from './status';

export default class Projects {
  render() {
    return (
      <Panel style={style.panel}>
        <Status />
        <List />
        <Logo style={style.logo}/>
      </Panel>
    );
  }
}

const style = {
  logo: {
    alignSelf: 'center',
    marginTop: 70
  },
  panel: {
    paddingBottom: 100
  }
};
