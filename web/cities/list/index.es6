import { connect } from 'redux/react';
import cityShape from '../shape';
import InnerComponent from './component';
import React, { PropTypes } from 'react';

// TODO getter; by project
@connect(({cities}) => ({cities: Object.keys(cities).map(id => ({id}))}))
export default class CitiesContainer {
  render() {
    return <InnerComponent cities={this.props.cities} />;
  }

  static propTypes = {
    cities: PropTypes.arrayOf(cityShape).isRequired
  }
}
