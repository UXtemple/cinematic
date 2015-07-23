import React, { PropTypes } from 'react';

export default class Video {
  render() {
    const { id } = this.props;

    return <iframe src={`//player.vimeo.com/video/${id}`} width='100%' height='180px'
      frameBorder='0' webkitAllowFullScreen mozAllowFullScreen allowFullScreen />;
  }

  static propTypes = {
    id: PropTypes.string.isRequired
  }
}
