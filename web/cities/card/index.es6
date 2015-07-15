import { connect } from 'redux/react';
import cityShape from '../shape';
import InnerComponent from './component';
import React, { PropTypes } from 'react';

@connect(({cities}, {id}) => ({city: cities[id]}))
export default class CityCardContainer {
  render() {
    return <InnerComponent {...this.props} />;
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    city: cityShape.isRequired
  }
}
