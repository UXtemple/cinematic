import React, { PropTypes } from 'react';

export default class Message {
  render() {
    const {height, width} = this.props;
    const fill = this.props.fill;

    return (
      <span style={this.props.style}>
        <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 350 75'>
          <path fill={fill} d="M339.114,0H10.886C5.221,0,0.628,4.592,0.628,10.257v43.754c0,5.665,4.592,10.257,10.257,10.257h152.51
							L175,75.873l11.605-11.605h152.51c5.665,0,10.257-4.592,10.257-10.257V10.257C349.372,4.592,344.779,0,339.114,0z"/>
        </svg>
      </span>
    );
  }

  static propTypes = {
    fill: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
  }

  static defaultProps = {
    fill: 'white',
    height: 70,
    width: 350
  }
}
