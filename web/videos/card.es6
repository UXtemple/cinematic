import { Action } from 'panels-blocks';
import ArrowIcon from '../icons/arrow';
import React from 'react';
import Tags from './tags';
import videoShape from './shape';
import Video from './video';

export default class VideoCard {
  render() {
    const { id, number, music, musicTitle, tags, videoId } = this.props.video;

    return (
      <div style={style.entry}>
        <div>
          <div style={style.number}>{number}</div>
          <Video id={videoId} />
          <div>
            <div style={style.label}>MUSIC BY AUDIO JUNGLE</div>
            <a href={music} style={style.link}>{musicTitle}</a>
          </div>
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
    margin: '15px 0 13px 0'
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
  label: {
    fontSize: 12,
    marginLeft: 15,
    marginTop: 10
  },
  link: {
    //float: 'left',
    fontSize: 12,
    //border: '1px solid #bcbec0',
    //borderRadius: 20,
    //height: 20,
    margin: '0 0 5px 15px',
    //overflow: 'hidden',
    //padding: '0 10px 0 10px',
    textDecoration: 'none',
    textTransform: 'uppercase'
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
