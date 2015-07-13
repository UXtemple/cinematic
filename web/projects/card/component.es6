// import { actions as boxesActiveActions } from '../../../boxes-active';
import { ActionWithIcon } from 'panels-blocks';
import ArrowIcon from '../../icons/arrow';
import React from 'react';

export default class Action {
  render() {
    const { id, name } = this.props.project;
    // const setActiveBox = () => this.props.dispatch(boxesActiveActions.set(id));
    // onClick={setActiveBox}

    return <ActionWithIcon href={id} icon={ArrowIcon} style={style.action}>{name}</ActionWithIcon>;
  }
}


const style = {
  action: {
    action: {
      active: {},
      base: {
        alignItems: 'center',
        color: '#f2f2f2',
        padding: 25
      }
    },
    icon: {}
  }
}
