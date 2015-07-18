import { connect } from 'redux/react';
import { listForCity } from '../../videos/getters';
import { Panel } from 'panels-ui';
import List from './list';
import React, { PropTypes } from 'react';
import videoShape from './shape';

@connect((state, {cityId}) => ({videos: listForCity(state.videos, {cityId})}))
export default class videos {
  render() {
    const { videos } = this.props;

    return (
      <Panel style={style}>
        <List videos={videos} />
      </Panel>
    );
  }

  static propTypes = {
    videos: PropTypes.arrayOf(videoShape).isRequired,
    cityId: PropTypes.string.isRequired
  }
}

const style = {
  paddingBottom: 100
};
