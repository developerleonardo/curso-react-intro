import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  
  let message = '';
    if (completedTodos === totalTodos && completedTodos >= 1 ) {
      message = `Congratulations! You have completed all your tasks`;
    }else{
      message = `You have completed ${completedTodos} of ${totalTodos} TO-DOS`
    }
  
 
  return (
    <>
      <h1 className='main-tittle'>
        TODO MACHINE
      </h1>
      <h2 className='todo-counter'>
          {message}
      </h2>
    </>

  );
}

export { TodoCounter };