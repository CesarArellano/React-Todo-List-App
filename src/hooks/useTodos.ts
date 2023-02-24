import { useContext } from "react"
import { TodoContext } from "../todo/context/TodoContext"

export const useTodos= () => {
  const { todoState, toggleTodo, isShowForm, toggleView, addTodo, todoSelected, editTodo, removeTodo, setCurrentTodo } = useContext( TodoContext )
  const { todos } = todoState;

  const handleToggleTodo = ( todoId: string ) => {
    toggleTodo(todoId)
  }

  return { 
    todos: todos,
    pendingTodos: todos.filter( todo => !todo.completed ).length,
    tooggleTodo: handleToggleTodo,
    isShowForm,
    toggleView,
    addTodo,
    todoSelected,
    editTodo,
    removeTodo,
    setCurrentTodo
  };
}