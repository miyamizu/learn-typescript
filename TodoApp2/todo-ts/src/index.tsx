import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";

interface Todo {
  id: number;
  name: string;
}

interface TodoListItemProps {
  todo: Todo;
  onDelete: (todo: Todo) => void;
}

const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({
  todo,
  onDelete
}) => {
  const onClick = () => {
    onDelete(todo);
  };

  return (
    <li>
      {todo.name} <button onClick={onClick}>Delete</button>
    </li>
  );
};

interface TodosListProps {
  todos: Todo[];
  onDelete: (todo: Todo) => void;
}

const TodosList: React.FunctionComponent<TodosListProps> = ({
  todos,
  onDelete
}) => (
  <ul>
    {todos.map(todo => (
      <TodoListItem todo={todo} key={todo.id} onDelete={onDelete} />
    ))}
  </ul>
);

interface NewTodoFormProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  todo: Todo;
}

const NewTodoForm: React.FunctionComponent<NewTodoFormProps> = ({
  onChange,
  onAdd,
  todo
}) => (
  <form onSubmit={onAdd}>
    <input onChange={onChange} value={todo.name} />
    <button type="submit">Add a todo</button>
  </form>
);

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