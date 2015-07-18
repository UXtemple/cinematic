import Message from '../icons/message';
import range from 'lodash.range';
import React from 'react';

export default class Status {
  render() {
    const progress = range(0, 10).map(() => <div style={style.progress}/>);

    return (
      <div>
        <div style={style.message.wrapper}>
          <Message />
          <div style={style.message.text}>Project will start on 25th of August 2015!</div>
        </div>
        <div style={style.progressBar}>
          <div style={style.labels}>
            <div style={style.goal}>GOAL</div>
            <div style={style.flights}>10000 FLIGHTS</div>
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
    fontSize: '0.75em',
    fontWeight: 400,
    marginLeft: '5px',
    textTransform: 'uppercase'
  },
  flights: {
    color: 'white',
    fontSize: '0.75em',
    fontWeight: 400,
    marginRight: '5px',
    textTransform: 'uppercase'
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    marginBottom: '45px',
    width: '320px'
  },
  message: {
    wrapper: {
      alignSelf: 'center',
      margin: '20px 0 10px 0'
    },
    text: {
      height: '100%',
      left: 0,
      padding: '20px 0',
      position: 'absolute',
      textAlign: 'center',
      top: 0,
      width: '100%'
    }
  }
};
