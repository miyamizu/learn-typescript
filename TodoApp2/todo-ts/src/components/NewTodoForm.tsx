import React from 'react';
import { NewTodoFormProps } from './types'

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

export default NewTodoForm;