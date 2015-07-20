import React, { PropTypes } from 'react';

export default class Tags {
  render() {
    const tags = this.props.list.map(tag => <div style={style.item}>{tag}</div>);

    return <div style={style.list}>{tags}</div>;
  }

  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.string).isRequired
  }
}

const style = {
  item: {
    marginLeft: 5
  },
  list: {
    flexDirection: 'row'
  }
}
