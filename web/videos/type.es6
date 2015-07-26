import { connect } from 'redux/react';
import { listForCity } from '../../videos/getters';
import { Panel } from 'panels-ui';
import cityShape from '../cities/shape';
import List from './list';
import React, { PropTypes } from 'react';
import videoShape from './shape';

@connect((state, {cityId}) => ({
  city: state.cities[cityId],
  videos: listForCity(state.videos, {cityId})
}))
export default class Videos {
  render() {
    const { city, videos, width } = this.props;

    return (
      <Panel style={style.panel} width={width}>
        <div style={style.title}>{city.name}</div>
        <List videos={videos} />
        <div style={style.license.headline}>Licence details</div>
        <a href='https://creativecommons.org/licenses/by/2.0/' style={style.license.ref} target='_blank'>Pre-release videos under CC with Attribution 2.0</a>
      </Panel>
    );
  }

  static propTypes = {
    city: cityShape.isRequired,
    cityId: PropTypes.string.isRequired,
    videos: PropTypes.arrayOf(videoShape).isRequired,
    width: PropTypes.number
  }
}

const style = {
  panel: {
    //backgroundColor: 'rgb(255,255,255)',
    backgroundColor: 'rgba(131,131,131,0.9)',
    paddingBottom: 100
  },
  license: {
    headline: {
      alignSelf: 'center',
      color: 'white',
      fontSize: 12,
      marginTop: 20
    },
    ref: {
      alignSelf: 'center',
      color: 'white',
      fontSize: 12,
      marginTop: 5,
      textDecoration: 'none',
      textTransform: 'uppercase'
    }
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: 900,
    letterSpacing: 1,
    margin: '35px 0 35px 25px',
    textTransform: 'uppercase'
  }
};
