import { Action } from 'panels-blocks';
import ArrowIcon from '../icons/arrow';
import React from 'react';
import Tags from './tags';
import videoShape from './shape';
import Video from './video';

export default class VideoCard {
  render() {
    const { id, number, tags, videoId } = this.props.video;

    return (
      <div style={style.entry}>
        <div>
          <div style={style.number}>{number}</div>
          <Video id={videoId} />
          <Tags list={tags} />
          <div style={style.download}>
            <div style={style.preview} />
            <div style={style.hd} />
            <div style={style.fourk} />
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
    marginBottom: 13
  },
  fourk: {
    backgroundColor: '#fbb079',
    borderRadius: 5,
    height: 40,
    width: '30%'
  },
  hd: {
    backgroundColor: '#53adb5',
    borderRadius: 5,
    height: 40,
    width: '30%',
    marginLeft: 5,
    marginRight: 5
  },
  entry: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    width: '90%'
  },
  number: {
    fontSize: 14,
    margin: '10px 0 10px 10px'
  },
  preview: {
    backgroundColor: '#a7a9ac',
    borderRadius: 5,
    height: 40,
    width: '30%'
  }
};
