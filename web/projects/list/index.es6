import { connect } from 'redux/react';
import InnerComponent from './component';
import projectShape from '../shape';
import React, { PropTypes } from 'react';

// TODO getter
@connect(({projects}) => ({projects: Object.keys(projects).map(id => ({id}))}))
export default class ProjectsContainer {
  render() {
    return <InnerComponent projects={this.props.projects} />;
  }

  static propTypes = {
    projects: PropTypes.arrayOf(projectShape).isRequired
  }
}
