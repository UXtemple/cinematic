import { Action } from 'panels-blocks';
import ArrowIcon from '../icons/arrow';
import React from 'react';
import videoShape from './shape';
import Video from 'react-video';

export default class VideoCard {
  render() {
    const { id, name, videoId } = this.props.video;

    return (
      <div>
        <h2 style={style.name}>{name}</h2>
        <div>VIDEO GOES HERE</div>
      </div>
    );
  }

  static propTypes = {
    video: videoShape.isRequired
  }
}

const style = {
  name: {
    fontSize: '2em',
  }
};
