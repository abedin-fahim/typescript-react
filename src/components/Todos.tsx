import { FC, useContext } from 'react';

import Todo from './Todo';
import styles from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

const Todos: FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => (
        <Todo
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          key={item.id}
          todoText={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
