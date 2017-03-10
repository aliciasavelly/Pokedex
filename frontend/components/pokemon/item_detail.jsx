import React from 'react';

class ItemDetail extends React.Component {
  render() {
    return (
      <li>{this.props.item.name}</li>
    )
  }
}


export default ItemDetail;
