import { TodoInterface, TodoState } from '../interfaces/interfaces';

type TodoAction = 
  | { type: 'addTodo', payload: TodoInterface }
  | { type: 'editTodo', payload: TodoInterface }
  | { type: 'removeTodo', payload: { id: string } }
  | { type: 'toggleTodo', payload: { id: string } }


export const todoReducer = ( state: TodoState, action: TodoAction ): TodoState => {

  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todos: [ ...state.todos, action.payload ],
        pending: state.pending + 1,
        todoCount: state.todoCount + 1
      }
      
    case 'toggleTodo':
      return {
        ...state,
        todos: state.todos.map(({ ...todo }) => {
          if( todo.id === action.payload.id ) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      }
    case 'editTodo':
      return {
        ...state,
        todos: state.todos.map(({ ...todo }) => {
          if( todo.id === action.payload.id) {
            todo = action.payload
          }
          return todo;
        })
      }
      case 'removeTodo':
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload.id)
        }
    default:
      return state;
  }
}