import { Panel } from 'panels-ui';
import List from './list';
import React from 'react';

const style = {
  paddingBottom: 100
};

export default class Cities {
  render() {
    return (
      <Panel style={style}>
        <List />
      </Panel>
    );
  }
}
