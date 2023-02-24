import { TodoList } from './components/TodoList';
import { TodoProvider } from './context/TodoProvider';
import { Title } from './components/Title';
import { Header } from './components/Header';
import { useTodos } from '../hooks/useTodos';
import { TaskForm } from './components/TaskForm';

export const Todo = () => {
  const { isShowForm } = useTodos();
  return (
    <>
      <Header />
      {
        ( isShowForm ) 
          ? <TaskForm />
          : (
            <div className='todo'>
              <Title />
              <TodoList />
            </div>
          )
      }
    </>
  )
}