import { TodoProvider } from './todo/context/TodoProvider';
import { Todo } from './todo/Todo';

const MainApp = () => {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  )
}

export default MainApp;