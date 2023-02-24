export interface TodoInterface {
  id: string;
  desc: string;
  completed: boolean;
}

export interface TodoState {
  todoCount: number;
  todos: TodoInterface[];
  completed: number;
  pending: number;
}

