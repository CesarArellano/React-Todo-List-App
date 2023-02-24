import { createContext } from "react";
import { TodoState, TodoInterface } from '../interfaces/interfaces';

export type TodoContextProps = {
  todoState: TodoState,
  isShowForm: boolean,
  todoSelected: TodoInterface | null,
  setCurrentTodo: ( todo: TodoInterface | null ) => void,
  addTodo: (todo: TodoInterface) => void
  toggleTodo: ( id: string ) => void,
  toggleView: () => void,
  removeTodo: ( id: string ) => void,
  editTodo: (todo: TodoInterface) => void
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

