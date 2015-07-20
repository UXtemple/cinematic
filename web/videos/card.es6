import { Action } from 'panels-blocks';
import ArrowIcon from '../icons/arrow';
import React from 'react';
import videoShape from './shape';
import Video from 'react-video';

export default class VideoCard {
  render() {
    const { id, number, videoId } = this.props.video;

    return (
      <div style={style.entry}>
        <div>
          <div style={style.number}>{number}</div>
          <iframe src={`//player.vimeo.com/video/${videoId}`} style={{border: 0}} border={0} width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen />
          <tags style={style.tags}/>
          <div style={style.download}>
            <div style={style.hd}/>
            <div style={style.preview}/>
          </div>
        </div>
      </div>
    );
  }

  static propTypes = {
    video: videoShape.isRequired
  }
}

const style = {
  download: {
    //borderTop: '1px solid #6d6e71',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
  },
  hd: {
    backgroundColor: '#53adb5',
    borderRadius: 10,
    height: 40,
    width: '45.5%',
    marginRight: 10
  },
  entry: {
    alignSelf: 'center',
    backgroundColor: 'white',
    //border: '1px solid #6d6e71',
    borderRadius: 10,
    marginBottom: 20,
    width: '95%'
  },
  number: {
    fontSize: 14,
    margin: '5px 0 5px 10px'
  },
  preview: {
    backgroundColor: '#a7a9ac',
    borderRadius: 10,
    //borderLeft: '1px solid #6d6e71',
    height: 40,
    width: '45.5%'
  },
  tags: {
    height: 100,
  }
};
