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
        <ArrowIcon style={style.icon} />
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
      fontSize: '10px',
      height: '200px',
      justifyContent: 'space-between',
      marginBottom: 20,
      width: 320
    }
  },
  icon: {
    base: {
      style: {
        alignSelf: 'center'
        //marginRight: 40
      }
    }
  },
  name: {
    fontSize: 20,
    marginLeft: 30
  }
};
