import { TodoInterface } from '../interfaces/interfaces';
import { useTodos } from '../../hooks/useTodos';

interface Props {
  todo: TodoInterface
}

export const TodoItem = ({ todo }: Props) => {

  const { tooggleTodo, toggleView, setCurrentTodo, removeTodo } = useTodos();

  const handleEditClick = () => {
    toggleView()
    setCurrentTodo(todo)
  }

  return (
    <div>
      <li 
        style={{
          cursor: 'pointer',
          textDecoration: todo.completed ? 'line-through' : ''
        }}
        onClick={ () => tooggleTodo(todo.id) }
      >
        { todo.desc }
      </li>
      <button
        style={{
          background: '#3d4d5d',
          marginRight: 10,
          height: 40
        }}
        onClick={ handleEditClick }
      >
        Edit
      </button>
      <button
        style={{
          background: 'red',
          height: 40
        }}
        onClick={ () => removeTodo(todo.id) }
      >
          Delete
      </button>
    </div>
  );
}
