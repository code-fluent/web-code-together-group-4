import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: "Buy milk", isCompleted: 0 },
        { id: 2, name: "Buy bread", isCompleted: 1 },
        { id: 3, name: "Buy meat", isCompleted: 0 },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <input type="text" className="todoInput" />

        {this.state.todos.map((todo) => {
          return (
            <label key={todo.id} className="todo">
              <input type="checkbox" /> {todo.name}
            </label>
          );
        })}
      </div>
    );
  }
}

export default App;
