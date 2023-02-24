import { useTodos } from "../hooks/useTodos";

export const Header = () => {
  const { isShowForm, toggleView, todoSelected, setCurrentTodo } = useTodos();
  
  const handleClick = () => {
    toggleView()
    if( todoSelected != null ) {
      setCurrentTodo(null)
    }
  }

  return (
    <div className="header">
      <h3>Todo App</h3>
      <button
        style={{
          background: isShowForm ? 'red' : 'green'
        }}
        onClick={ handleClick }
      >
        {
          isShowForm ? 'Back' : 'Add New Task'
        }
      </button>
    </div>
  )
}
