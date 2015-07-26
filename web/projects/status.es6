import Message from '../icons/message';
import range from 'lodash.range';
import React from 'react';

export default class Status {
  render() {

    return (
      <div style={style.message.wrapper}>
        <Message />
        <div style={style.message.text}>10,000 aerial movies from major spots!</div>
      </div>
    );
  }
}

const style = {
  message: {
    wrapper: {
      alignSelf: 'center',
      margin: '80px 0 20px 0'
    },
    text: {
      fontSize: 14,
      height: '100%',
      left: 0,
      padding: '24px 0',
      position: 'absolute',
      textAlign: 'center',
      top: 0,
      width: '100%'
    }
  }
};
