import { connect } from 'redux/react';
import { listForProject } from '../../cities/getters';
import { Panel } from 'panels-ui';
import cityShape from './shape';
import List from './list';
import React, { PropTypes } from 'react';
import Status from './status';

@connect((state, {projectId}) => ({cities: listForProject(state.cities, {projectId})}))
export default class Cities {
  render() {
    const { cities, width } = this.props;

    return (
      <Panel style={style} width={width}>
        <Status />
        <List cities={cities} />
      </Panel>
    );
  }

  static propTypes = {
    cities: PropTypes.arrayOf(cityShape).isRequired,
    projectId: PropTypes.string.isRequired,
    width: PropTypes.number
  }
}

const style = {
  backgroundColor: 'rgba(43,38,40, 0.85)',
  paddingBottom: 100
};
