import { FC, useRef } from 'react';
import styles from './NewTodo.module.css';

const NewTodo: FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // const enteredText = todoTextRef.current?.value;
    const enteredText = todoTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      // Throw an error;
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor='title'>Todo Text</label>
      <input
        ref={todoTextRef}
        type='text'
        id='title'
      />
      <button type='submit'>Add</button>
    </form>
  );
};

export default NewTodo;
