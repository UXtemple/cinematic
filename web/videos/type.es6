import { connect } from 'redux/react';
import { listForCity } from '../../videos/getters';
import { Panel } from 'panels-ui';
import List from './list';
import React, { PropTypes } from 'react';
import videoShape from './shape';

@connect((state, {cityId}) => ({videos: listForCity(state.videos, {cityId})}))
export default class videos {
  render() {
    const { name, videos } = this.props;

    return (
      <Panel style={style.panel}>
        <h1 style={style.title}>{name} </h1>
        <List videos={videos} />
      </Panel>
    );
  }

  static propTypes = {
    videos: PropTypes.arrayOf(videoShape).isRequired,
    cityId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }
}

const style = {
  panel: {
    //backgroundColor: 'rgb(255,255,255)',
    backgroundColor: 'rgba(255,255,255, 0.85)',
    paddingBottom: 100
  }
};
