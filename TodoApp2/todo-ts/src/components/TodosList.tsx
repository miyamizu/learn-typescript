import React from 'react';
import { Todo } from './types';
import TodoListItem from './TodoListItem';

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

export default TodosList;