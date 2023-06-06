import { FC } from 'react';
import styles from './Todo.module.css';

const Todo: FC<{ todoText: string; onRemoveTodo: () => void }> = (props) => {
  return (
    <li
      onClick={props.onRemoveTodo}
      className={styles.item}
    >
      {props.todoText}
    </li>
  );
};

export default Todo;
