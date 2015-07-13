import ProjectCard from '../card';
import projectShape from '../shape';
import React, { PropTypes } from 'react';

const style = {
  width: '100%'
};

export default class Projects {
  render() {
    const projects = this.props.projects.map(({id}) => <ProjectCard key={id} id={id} />);

    return <div style={style}>{projects}</div>;
  }

  static propTypes = {
    projects: PropTypes.arrayOf(projectShape).isRequired
  }
}
