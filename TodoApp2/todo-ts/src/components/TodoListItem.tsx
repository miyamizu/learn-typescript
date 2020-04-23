import React from 'react';
import { TodoListItemProps } from './types';

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

export default TodoListItem;