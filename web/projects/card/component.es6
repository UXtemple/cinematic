// import { actions as boxesActiveActions } from '../../../boxes-active';
import { ActionWithIcon } from 'panels-blocks';
import ArrowIcon from '../../icons/arrow';
import MallorcaMap from '../../icons/arrow';
import React from 'react';

export default class Action {
  render() {
    const { id, name } = this.props.project;
    // const setActiveBox = () => this.props.dispatch(boxesActiveActions.set(id));
    // onClick={setActiveBox}

    return (
      <ActionWithIcon href={id} icon={ArrowIcon} style={style.action}>
        <div style={style.main}>
          <MallorcaMap style={style.map} width='100%' height='100%' />
          <div>{name}</div>
          <div>{name}</div>
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
        backgroundColor: 'orange',
        borderRadius: 170,
        color: '#f2f2f2',
        height: '75vw',
        width: '75vw'
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
  main: {
    alignItems: 'center',
    flex: 1
  },
  map: {
    height: 100,
    width: 100
  }
}
