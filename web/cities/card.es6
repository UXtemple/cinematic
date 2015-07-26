import { Action } from 'panels-blocks';
import ArrowIcon from '../icons/arrow';
import cityShape from './shape';
import React from 'react';

export default class CityCard {
  render() {
    const { id, name } = this.props.city;

    const actionStyle = {
      active: style.action.active,
      ...{
        base: {
          ...style.action.base,
          backgroundImage: `url(/images/cities/${id}.jpg)`
        }
      }
    };

    return (
      <Action href={id} style={actionStyle}>
        <div style={style.name}>{name}</div>
      </Action>
    );
  }

  static propTypes = {
    city: cityShape.isRequired
  }
}

const style = {
  action: {
    active: {
      borderRadius: 10,
      marginBottom: 20,
      opacity: 0.9
    },
    base: {
      alignItems: 'center',
      alignSelf: 'center',
      backgroundSize: 'cover',
      borderRadius: 10,
      color: '#f2f2f2',
      height: '200px',
      justifyContent: 'center',
      paddingTop: 10,
      marginBottom: 20,
      width: 320
    }
  },
  name: {
    fontSize: 14,
    fontFamily: 'MSF__ProximaNovaSoft-BoldWeb',
    //letterSpacing: 1,
    textTransform: 'uppercase'
  }
};
