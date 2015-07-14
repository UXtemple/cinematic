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
        <div style={style.progressBar}>
          <div style={style.labels}>
            <div style={style.goal}>GOAL</div>
            <div style={style.flights}>10000 FLIGHTS</div>
          </div>
          <div style={style.bar}>
            <div style={style.progress}/>
            <div style={style.progress}/>
            <div style={style.progress}/>
            <div style={style.progress}/>
            <div style={style.progress}/>
            <div style={style.progress}/>
            <div style={style.progress}/>
            <div style={style.progress}/>
            <div style={style.progress}/>
            <div style={style.progress}/>
          </div>
        </div>
        <List />
      </Panel>
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
    flexDirection: 'row'
  },
  panel: {
    backgroundColor: '#f2f2f2',
    paddingBottom: 100,
    maxWidth: 360,
    width: '100vw'
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
    alignSelf: 'center',
    margin: '20px 0 10px 0'
  }
};
