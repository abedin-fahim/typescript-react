import { FC } from 'react';

import Todo from './Todo';
import TodoModel from '../models/todo';
import styles from './Todos.module.css';

const Todos: FC<{ items: TodoModel[] }> = (props) => {
  return (
    <ul className={styles.todos}>
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
