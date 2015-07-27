import { Action } from 'panels-blocks';
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
            <Action href='http://4k.10000cinematicflights.com.dev:3000/' style={style.fourk}>4K</Action>
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
    active: {
      backgroundColor: 'rgba(255, 131, 0, 0.9)'
    },
    base: {
      backgroundColor: 'rgb(255, 131, 0)',
      borderRadius: 5,
      color: 'white',
      fontFamily: 'MSF__ProximaNovaSoft-BoldWeb',
      fontSize: 14,
      justifyContent: 'center',
      padding: '11px 0 10px 0',
      textDecoration: 'none',
      width: '30%'
    }
  },
  hd: {
    backgroundColor: '#1f79c8',
    borderRadius: 5,
    color: 'white',
    fontFamily: 'MSF__ProximaNovaSoft-BoldWeb',
    fontSize: 14,
    padding: '11px 0 10px 0',
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
    color: '#9b9b9b',
    fontSize: 12,
    marginLeft: 15,
    marginTop: 20
  },
  link: {
    color: 'black',
    fontSize: 12,
    fontWeight: 900,
    margin: '7px 0 10px 15px',
    textDecoration: 'none',
    textTransform: 'uppercase'
  },
  number: {
    color: '#9b9b9b',
    fontSize: 12,
    margin: '10px 0 10px 10px'
  },
  sd: {
    backgroundColor: '#a7a9ac',
    borderRadius: 5,
    color: 'white',
    fontFamily: 'MSF__ProximaNovaSoft-BoldWeb',
    fontSize: 14,
    padding: '11px 0 10px 0',
    textAlign: 'center',
    textDecoration: 'none',
    width: '30%'
  }
};
