import React from "react";

export default class Input extends React.Component {
  state = {
    quantity: this.props.item.quantity
  };
  handleChange = e => {
    this.setState({ quantity: e.target.value }, () =>
      this.props.updateOrderQuantity(this.props.item.id, this.state.quantity)
    );
  };
  render() {
    return (
      <div>
         
        <input
          style={{maxWidth:"70px"}}
          type="number"
          defaultValue="1"
          min="1"
          value={this.state.quantity}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}