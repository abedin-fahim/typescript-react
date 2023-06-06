import { FC } from 'react';
import styles from './Todo.module.css';

const Todo: FC<{ todoText: string }> = (props) => {
  return <li className={styles.item}>{props.todoText}</li>;
};

export default Todo;
