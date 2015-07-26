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
        <MallorcaMap style={style.map} />
        <div style={style.name}>{name}</div>
        <div style={style.subtitle}>{subtitle}</div>
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
      flexDirection: 'column',
      alignSelf: 'center',
      backgroundColor: 'rgba(255, 131, 0, 0.85)',
      borderRadius: 170,
      color: '#f2f2f2',
      height: 320,
      justifyContent: 'center',
      width: 320
    }
  },
  name: {
    fontSize: 14,
    fontWeight: 900,
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  map: {
    marginBottom: 15,
    width: 235
  },
  subtitle: {
   fontSize: 14
//    fontWeight: 400,
  //  textTransform: 'uppercase'
  }
}
