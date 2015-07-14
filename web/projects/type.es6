import { Panel } from 'panels-ui';
import { Title } from 'panels-blocks';
import List from './list';
import React from 'react';

export default class Projects {
  render() {
    return (
      <Panel style={style.panel}>
        <Title style={style.title}>10000 Cinematic Flights</Title>
        <List />
      </Panel>
    );
  }
}

const style = {
  panel: {
    //backgroundColor: '#323232',
    paddingBottom: 100,
    maxWidth: 360,
    width: '100vw'
  },
  title: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 30,
    margin: '25px 0px 0px'
  }
};
