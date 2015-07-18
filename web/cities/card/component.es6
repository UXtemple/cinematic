import { Action } from 'panels-blocks';
import ArrowIcon from '../../icons/arrow';
import React from 'react';

export default class CityCard {
  render() {
    const { id, name } = this.props.city;

    let actionStyle = {
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
        <div style={style.inner}>
          <div style={style.name}>{name}</div>
        </div>
        <ArrowIcon style={style.icon} />
      </Action>
    );
  }
}

const style = {
  action: {
    active: {
      opacity: 0.75
    },
    base: {
      alignItems: 'center',
      alignSelf: 'center',
      backgroundSize: 'cover',
      color: '#f2f2f2',
      fontSize: '10px',
      height: '150px',
      width: '100%'
    }
  },
  icon: {
    base: {
      style: {
        alignSelf: 'center',
        marginRight: 20
      }
    }
  },
  inner: {
    flex: 1,
    marginLeft: 50
  },
  name: {
    fontSize: '2em',
  }
}
