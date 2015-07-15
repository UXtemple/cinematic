import CityCard from '../card';
import cityShape from '../shape';
import React, { PropTypes } from 'react';

const style = {
  width: '100%'
};

export default class Cities {
  render() {
    const cities = this.props.cities.map(({id}) => <CityCard key={id} id={id} />);

    return <div style={style}>{cities}</div>;
  }

  static propTypes = {
    cities: PropTypes.arrayOf(cityShape).isRequired
  }
}
