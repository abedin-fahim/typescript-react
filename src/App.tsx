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

  const removeTodoHandler = (todoId: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== todoId);
    });
  };
  // const todos = [new Todo('Learn React'), new Todo('Learn Typescript')];
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos
        onRemoveTodo={removeTodoHandler}
        items={todos}
      />
    </div>
  );
}

export default App;
