import Logo from '../icons/logo';
import { Panel } from 'panels-ui';
import React from 'react';

export default class FourK {
  render() {
    const { width } = this.props;

    return (
      <Panel style={style.panel} width={width}>
        <div style={style.title}>4K kickstarter campaign</div>
        <div style={{alignSelf: 'center', width: '90%'}}>
          <iframe src={`//player.vimeo.com/video/134550256`} width='100%' height='180px'
            frameBorder='0' webkitAllowFullScreen mozAllowFullScreen allowFullScreen />
        </div>
        <div style={style.subtitle}>We can make everyone fall in love with Mallorca! 
          Today, we need Your support! In return we give you great reward packages.</div>
        <a href='' style={style.button} target='_blank'>Show me my rewards</a>
        <Logo style={style.logo} />
      </Panel>
    );
  }
}

const style = {
  button: {
    alignSelf: 'center',
    fontFamily: 'MSF__ProximaNovaSoft-BoldWeb',
    fontSize: 14,
    backgroundColor: 'white',
    borderRadius: 20,
    color: 'rgb(255, 131, 0)',
    height: 40,
    padding: '14px 20px 0 20px',
    textDecoration: 'none',
    textTransform: 'uppercase'
  },
  logo: {
    alignSelf: 'center',
    marginTop: 100
  },
  panel: {
    backgroundColor: 'rgba(255, 131, 0, 0.9)',
    paddingBottom: 100
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'MSF__ProximaNovaSoft-BoldWeb',
    margin: '35px 0 35px 25px',
    textTransform: 'uppercase'
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'MSF__ProximaNovaSoft-RegularWeb',
    lineHeight: 1.5,
    margin: '35px 25px 35px 25px'
    //textTransform: 'uppercase'
  }
};
