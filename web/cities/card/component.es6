import { ActionWithIcon } from 'panels-blocks';
import ArrowIcon from '../../icons/arrow';
import React from 'react';

export default class CityCard {
  render() {
    const { id, name } = this.props.city;

    let actionStyle = {...style.action};
    actionStyle.action.base.backgroundImage = `url(/cities/${id}.jpg)`;

    return (
      <ActionWithIcon href={id} icon={ArrowIcon} style={actionStyle}>
        <div style={style.main}>
          <div style={style.name}>{name}</div>
        </div>
      </ActionWithIcon>
    );
  }
}

const style = {
  action: {
    action: {
      active: {},
      base: {
        alignItems: 'center',
        alignSelf: 'center',
        // backgroundColor: 'rgba(255, 131, 0, 0.85)',
        borderRadius: 170,
        color: '#f2f2f2',
        height: '320px',
        //justifyContent: 'center',
        width: '320px'
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
    }
  },
  name: {
    fontSize: '2em',
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '60px',
    marginRight: '10px',
    flex: 1
  },
  map: {
    //height: 100,
    width: '200px'
  },
  subtitle: {
   // fontSize: '0.65em',
//    fontWeight: 400,
  //  textTransform: 'uppercase'
  }
}
