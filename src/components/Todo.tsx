import { FC } from 'react';

const Todo: FC<{ todoText: string }> = (props) => {
  return <li>{props.todoText}</li>;
};

export default Todo;
