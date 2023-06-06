import { FC } from 'react';
import Todo from './Todo';
import TodoModel from '../models/todo';

const Todos: FC<{ items: TodoModel[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <Todo
          key={item.id}
          todoText={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
