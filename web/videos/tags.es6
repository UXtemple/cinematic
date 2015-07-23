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
    fontSize: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    height: 20,
    marginLeft: 5,
    padding: '1px 10px 0 10px',
    textTransform: 'uppercase'
  },
  list: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '10px 10px 10px 5px'   
  }
}
