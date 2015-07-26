import Card from './card';
import cityShape from './shape';
import React, { PropTypes } from 'react';

export default class Cities {
  render() {
    const cities = this.props.cities.map(city => <Card key={city.id} city={city} />);

    return <div style={style}>{cities}</div>;
  }

  static propTypes = {
    cities: PropTypes.arrayOf(cityShape).isRequired
  }
}

const style = {
  width: '100%'
};

// [{name: 'andratx'}, 
// {name: 'port andratx'}, 
// {name: 'santa ponsa'}, 
// {name: 'costa d\'\en blanes'}].sort(function (a,b) { 
// 	return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0) });