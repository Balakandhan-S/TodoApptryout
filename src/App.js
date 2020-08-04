import React from "react";
import TodoItem from "./components/TodoItem";
import TodoData from "./components/tododata.json";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodoData
    };
  }

  render() {
    const todoitems = this.state.todos.map(function(item) {
      return (
        <div>
          <TodoItem key={item.id} item={item} />
        </div>
      );
    });
    return <div className="App">{todoitems}</div>;
  }
}

export default App;
