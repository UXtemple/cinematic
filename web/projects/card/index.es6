import { connect } from 'redux/react';
import InnerComponent from './component';
import projectShape from '../shape';
import React, { PropTypes } from 'react';

@connect(({projects}, {id}) => ({project: projects[id]}))
export default class ProjectCardContainer {
  render() {
    return <InnerComponent {...this.props} />;
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    project: projectShape.isRequired
  }
}
