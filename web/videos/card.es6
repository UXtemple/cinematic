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
        <iframe src={`//player.vimeo.com/video/${videoId}`} style={{border: 0}} border={0} width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen />
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
