 import React, { Component } from 'react';

class ToDo extends Component {
  renderDone() {
    if (this.props.toDo.done) {
      return (
        <span>x</span>
      )
    }

    return (
      <span>o</span>
    )
  }

  render() {
    return (
      <div>
        <li>{this.props.toDo.toDo}</li>
        {this.renderDone()}
      </div>
    );
  }
}
export default ToDo;
