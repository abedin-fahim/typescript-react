import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (newTodoText: string) => {
    const newTodo = new Todo(newTodoText);

    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };
  // const todos = [new Todo('Learn React'), new Todo('Learn Typescript')];
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
