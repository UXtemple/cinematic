import React, { PropTypes } from 'react';

export default class Video {
  render() {
    const { id, height } = this.props;
    const wrapperStyle = {
      ...style.wrapper,
      height
    };

    return (
      <div style={wrapperStyle}>
        <div style={style.loader}>loading...</div>
        <iframe src={`//player.vimeo.com/video/${id}`} width='100%' height='100%' style={style.video}
          frameBorder='0' webkitAllowFullScreen mozAllowFullScreen allowFullScreen />
      </div>
    );
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    height: PropTypes.number
  }
}

const style = {
  wrapper: {
    position: 'relative',
    width: '100%'
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  loader: {
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    textAlign: 'center',
    top: 0,
    height: '100%',
    width: '100%'
  }
}
