import { Panel } from 'panels-ui';
//import { Title } from 'panels-blocks';
import List from './list';
import Message from '../icons/message';
import React from 'react';

export default class Projects {
  render() {
    return (
      <Panel style={style.panel}>
        <Message style={style.message}/>
        <List />
      </Panel>
    );
  }
}

const style = {
  panel: {
    backgroundColor: '#f2f2f2',
    paddingBottom: 100,
    maxWidth: 360,
    width: '100vw'
  },
  message: {
    alignSelf: 'center',
    margin: '10px 0 10px 0'
  }
};
