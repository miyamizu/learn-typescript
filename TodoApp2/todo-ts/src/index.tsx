import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { Todo } from "./components/types";
import TodosList from './components/TodosList';
import NewTodoForm from './components/NewTodoForm';

interface State {
  newTodo: Todo;
  todos: Todo[];
}

class App extends React.Component<{}, State> {
  state = {
    newTodo: {
      id: 1,
      name: ""
    },
    todos: []
  };

  render() {
    return (
      <div>
        <h2>React + TypeScript Todoリスト</h2>
        <NewTodoForm
          todo={this.state.newTodo}
          onAdd={this.addTodo}
          onChange={this.handleTodoChange}
        />
        <TodosList todos={this.state.todos} onDelete={this.deleteTodo} />
      </div>
    );
  }

  private addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!this.state.newTodo.name.length) {
      return;
    }

    this.setState(previousState => ({
      newTodo: {
        id: previousState.newTodo.id + 1,
        name: ""
      },
      todos: [...previousState.todos, previousState.newTodo]
    }));
  };

  private handleTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputedValue = event.target.value;

    this.setState({
      newTodo: {
        ...this.state.newTodo,
        name: inputedValue
      }
    });
  };

  private deleteTodo = (todoToDelete: Todo) => {
    this.setState(previousState => ({
      todos: [
        ...previousState.todos.filter(todo => todo.id !== todoToDelete.id)
      ]
    }));
  };
}

ReactDOM.render(<App />, document.getElementById("root"));