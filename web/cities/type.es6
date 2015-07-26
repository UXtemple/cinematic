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
      <Panel style={style.panel} width={width}>
        <Status />
        <List cities={cities} />
        <div style={style.license.headline}>Licence details</div>
        <a href='https://creativecommons.org/licenses/by/2.0/' style={style.license.ref} target='_blank'>Pre-release videos under CC with Attribution 2.0</a>
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
  panel: {
    backgroundColor: 'rgba(68,74,88, 0.9)',
    paddingBottom: 100
  },
  license: {
    headline: {
      alignSelf: 'center',
      color: 'white',
      fontSize: 12,
      marginTop: 20
    },
    ref: {
      alignSelf: 'center',
      color: 'white',
      fontSize: 12,
      marginTop: 10,
      textDecoration: 'none',
      textTransform: 'uppercase'
    }
  }
};
