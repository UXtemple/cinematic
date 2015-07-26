import { Action } from 'panels-blocks';
import ArrowIcon from '../icons/arrow';
import React from 'react';
import Tags from './tags';
import videoShape from './shape';
import Video from './video';

export default class VideoCard {
  render() {
    const { id, hd, number, music, musicTitle, sd, tags, videoId } = this.props.video;

    return (
      <div style={style.entry}>
        <div>
          <div style={style.number}>{number}</div>
          <Video id={videoId} />
          <div>
            <div style={style.label}>Music by Audio Jungle</div>
            <a href={music} style={style.link} target='_blank'>{musicTitle}</a>
          </div>
          <Tags list={tags} />
          <div style={style.download}>
            <a href={sd} style={style.sd}>SD</a>
            <a href={hd} style={style.hd}>HD</a>
            <div style={style.fourk}>4K</div>
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
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '15px 0 13px 0'
  },
  fourk: {
    backgroundColor: '#fbb079',
    borderRadius: 5,
    color: 'white',
    fontWeight: 900,
    fontSize: 14,
    padding: '10px 0',
    textAlign: 'center',
    textDecoration: 'none',
    width: '30%'
  },
  hd: {
    backgroundColor: '#53adb5',
    borderRadius: 5,
    color: 'white',
    fontWeight: 900,
    fontSize: 14,
    padding: '10px 0',
    textAlign: 'center',
    textDecoration: 'none',
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
    marginTop: 15
  },
  link: {
    fontSize: 12,
    fontWeight: 900,
    margin: '3px 0 10px 15px',
    textDecoration: 'none',
    textTransform: 'uppercase'
  },
  number: {
    fontSize: 12,
    margin: '10px 0 10px 10px'
  },
  sd: {
    backgroundColor: '#a7a9ac',
    borderRadius: 5,
    color: 'white',
    fontWeight: 900,
    fontSize: 14,
    padding: '10px 0',
    textAlign: 'center',
    textDecoration: 'none',
    width: '30%'
  }
};
