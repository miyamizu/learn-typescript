
export interface Todo {
  id: number;
  name: string;
}
  
export interface TodoListItemProps {
  todo: Todo;
  onDelete: (todo: Todo) => void;
}

export interface TodosListProps {
  todos: Todo[];
  onDelete: (todo: Todo) => void;
}

export interface NewTodoFormProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  todo: Todo;
}