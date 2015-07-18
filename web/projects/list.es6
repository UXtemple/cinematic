import Card from './card';
import projectShape from './shape';
import React, { PropTypes } from 'react';

const style = {
  width: '100%'
};

export default class Projects {
  render() {
    const projects = this.props.projects.map(project => <Card key={project.id} project={project} />);

    return <div style={style}>{projects}</div>;
  }

  static propTypes = {
    projects: PropTypes.arrayOf(projectShape).isRequired
  }
}
