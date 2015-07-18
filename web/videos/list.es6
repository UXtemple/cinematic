import Card from './card';
import React, { PropTypes } from 'react';
import videoShape from './shape';

export default class Videos {
  render() {
    const videos = this.props.videos.map(video => <Card key={video.id} video={video} />);

    return <div style={style}>{videos}</div>;
  }

  static propTypes = {
    videos: PropTypes.arrayOf(videoShape).isRequired
  }
}

const style = {
  width: '100%'
};
