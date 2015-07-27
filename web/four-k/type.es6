import { Panel } from 'panels-ui';
import React from 'react';

export default class FourK {
  render() {
    const { width } = this.props;

    return (
      <Panel style={style.panel} width={width}>
        4k
      </Panel>
    );
  }
}

const style = {
  panel: {
    backgroundColor: 'rgba(68,74,88, 0.9)',
    paddingBottom: 100
  }
};
