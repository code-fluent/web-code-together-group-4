import React, { Component } from "react";
import { render } from "react-dom";

// function Counter(props) {
//   return <h1>Hello ${props.name}</h1>;
// }

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

render(<Counter />, document.getElementById("root"));
