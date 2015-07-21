import { connect } from 'redux/react';
import { list } from '../../projects/getters';
import { Panel } from 'panels-ui';
import List from './list';
import Logo from '../icons/logo';
import projectShape from './shape';
import React, { PropTypes } from 'react';
import Status from './status';

@connect(state => ({projects: list(state.projects)}))
export default class Projects {
  render() {
    const { projects, width } = this.props;

    return (
      <Panel style={style.panel} width={width}>
        <Status />
        <List projects={projects} />
        <Logo style={style.logo} />
      </Panel>
    );
  }

  static propTypes = {
    projects: PropTypes.arrayOf(projectShape).isRequired,
    width: PropTypes.number
  }
}

const style = {
  logo: {
    alignSelf: 'center',
    marginTop: 100
  },
  panel: {
    paddingBottom: 100
  }
};
