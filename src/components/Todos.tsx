import { FC, useState } from 'react';

import Todo from './Todo';
import TodoModel from '../models/todo';
import styles from './Todos.module.css';

const Todos: FC<{
  items: TodoModel[];
  onRemoveTodo: (id: string) => void;
}> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <Todo
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
          key={item.id}
          todoText={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
