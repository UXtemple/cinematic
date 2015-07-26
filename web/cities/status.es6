import Message from '../icons/message';
import range from 'lodash.range';
import React from 'react';

export default class Status {
  render() {
    const progress = range(0, 10).map(i => <div key={i} style={style.progress}/>);

    return (
      <div style={style.global}>
        <div style={style.message.wrapper}>
          <Message />
          <div style={style.message.text}>Project will start on 25th of August 2015!</div>
        </div>
        <div style={style.progressBar}>
          <div style={style.labels}>
            <div style={style.goal}>GOAL</div>
            <div style={style.flights}>10,000 FLIGHTS</div>
          </div>
          <div style={style.bar}>{progress}</div>
        </div>
      </div>
    );
  }
}

const style = {
  bar: {
    alignItems: 'center',
    border: '2px solid white',
    borderRadius: '10px',
    height: '20px',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  goal: {
    color: 'white',
    fontSize: 12,
    marginLeft: 5,
    marginBottom: 5,
    textTransform: 'uppercase'
  },
  global: {
  	alignSelf: 'center'
	},
  flights: {
    color: 'white',
    fontSize: 12,
    marginRight: 5,
    marginBottom: 5,
    textTransform: 'uppercase'
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  progress: {
    backgroundColor: 'white',
    borderRadius: '3px',
    height: '4px',
    width: '4px'
  },
  progressBar: {
    alignSelf: 'center',
    //backgroundColor: 'red',
    flexDirection: 'column',
    marginBottom: '25px',
    width: '320px'
  },
  message: {
    wrapper: {
      alignSelf: 'center',
      margin: '20px 0 10px 0'
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
