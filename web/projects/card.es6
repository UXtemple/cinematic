import { Action } from 'panels-blocks';
import ArrowIcon from '../icons/arrow';
import MallorcaMap from '../icons/mallorcamap';
import projectShape from './shape';
import React, { PropTypes } from 'react';

export default class ProjectCard {
  render() {
    const { id, name, subtitle } = this.props.project;

    return (
      <Action href={id} style={style.action}>
        <div style={style.inner}>
          <MallorcaMap style={style.map} />
          <div style={style.name}>{name}</div>
          <div style={style.subtitle}>{subtitle}</div>
        </div>
        <ArrowIcon style={style.icon} />
      </Action>
    );
  }

  static propTypes = {
    project: projectShape
  }
}

const style = {
  action: {
    active: {
      opacity: 0.9
    },
    base: {
      alignItems: 'center',
      flex: 1,
      alignSelf: 'center',
      backgroundColor: 'rgba(255, 131, 0, 0.85)',
      borderRadius: 170,
      color: '#f2f2f2',
      height: 320,
      //justifyContent: 'center',
      width: 320
    }
  },
  icon: {
    alignSelf: 'center',
    marginRight: 20
  },
  inner: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    marginLeft: 50
  },
  name: {
    fontSize: '2em',
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: '60px',
    // marginRight: '10px',
    flex: 1
  },
  map: {
    //height: 100,
    width: 200
  },
  subtitle: {
   // fontSize: '0.65em',
//    fontWeight: 400,
  //  textTransform: 'uppercase'
  }
}
