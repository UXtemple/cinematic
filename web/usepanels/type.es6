import Logo2 from '../icons/logo2';
import { Panel } from 'panels-ui';
import React from 'react';

export default class UsePanels {
  render() {
    const { width } = this.props;

    return (
      <Panel style={style.panel} width={width}>
        <h1 style={style.title}>Use Panels</h1>
        <div style={style.subtitle}>All eyes on the content.</div>
        <p style={style.mission}>No reloads!</p>
        <p style={style.mission}>No tabs!</p>
        <p style={style.mission}>No menus!</p>
        <a href='' style={style.button.how} target='_blank'>How? Check Demos</a>
        <a href='' style={style.button.repo} target='_blank'>Github repository</a>
        <p style={style.feature}>Features:</p>
        <p style={style.feature}>"a" tags reimagined as Teleports!</p>
        <p style={style.feature}>Breadcrumb reinvented as a film strip of content!</p>
        <p style={style.feature}>New, contextual browsing pattern!</p>
        <p style={style.feature}>One user experience across all devices and screen sizes!</p>
        <Logo2 style={style.logo} />
      </Panel>
    );
  }
}

const style = {
  button:{
    how: {
      alignSelf: 'center',
      fontFamily: 'MSF__ProximaNovaSoft-BoldWeb',
      fontSize: 14,
      borderRadius: 20,
      color: 'white',
      height: 40,
      padding: '14px 20px 0 20px',
      textDecoration: 'none',
      textTransform: 'uppercase',
      backgroundColor: '#323232',
      marginTop: 60
    },
    repo: {
      alignSelf: 'center',
      fontFamily: 'MSF__ProximaNovaSoft-BoldWeb',
      fontSize: 14,
      borderRadius: 20,
      color: 'white',
      height: 40,
      padding: '14px 20px 0 20px',
      textDecoration: 'none',
      textTransform: 'uppercase',
      backgroundColor: '#323232',
      marginBottom: 30,
      marginTop: 10
    }
  },
  logo: {
    alignSelf: 'center',
    marginTop: 100
  },
  mission: {
    textDecoration: 'line-through',
    alignSelf: 'center',
    color: 'red',
    fontSize: 20,
    marginTop: 10
  },
  feature: {
    alignSelf: 'center',
    color: '#323232',
    fontSize: 15,
    margin: '20px 50px 0 50px',
    textAlign: 'center'
  },
  panel: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingBottom: 100
  },
  title: {
    alignSelf: 'center',
    color: '#323232',
    fontSize: 40,
    marginTop: 50
  },
  subtitle: {
    alignSelf: 'center',
    color: '#323232',
    fontSize: 20,
    fontFamily: 'MSF__ProximaNovaSoft-RegularWeb',
    marginBottom: 50,
    marginTop: 5
  }
};
