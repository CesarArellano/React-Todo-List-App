import { TodoContext } from './TodoContext';

import { TodoState, TodoInterface } from '../interfaces/interfaces';
import { useReducer, useState } from 'react';
import { todoReducer } from './todoReducer';

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: '1',
      desc: 'Learn Typescript',
      completed: false,
    },
    {
      id: '2',
      desc: 'Learn React',
      completed: false,
    }
  ],
  completed: 0,
  pending: 2,
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: Props) => {
  
  const [ todoSelected, setTodoSelected ] = useState<TodoInterface | null>(null);
  const [ isShowForm, setShowForm ] = useState<boolean>(false);
  const [ todoState, dispatch ] = useReducer(todoReducer, INITIAL_STATE)
  

  const addTodo = ( todo: TodoInterface ) => {
    dispatch({ type: 'addTodo', payload: todo })
  }

  const toggleTodo = ( id: string ) => {
    dispatch({ type: 'toggleTodo', payload: { id }})
  }

  const editTodo = ( todo: TodoInterface ) => {
    dispatch({ type: 'editTodo', payload: todo })
  }

  const removeTodo = ( id: string ) => {
    dispatch({ type: 'removeTodo', payload: { id }})
  }

  const toggleView = ( ) => {
    setShowForm(!isShowForm);
  }

  const setCurrentTodo = ( todo: TodoInterface | null ) => {
    setTodoSelected(todo);
  }

  return (
    <TodoContext.Provider 
      value={{
        todoState,
        addTodo,
        toggleTodo,
        isShowForm,
        toggleView,
        setCurrentTodo,
        todoSelected,
        removeTodo,
        editTodo,
      }}
    >
      { children }
    </TodoContext.Provider>
  )
}
