import React from 'react';

import Todo from '../../components/Todo'

type Props = {
  todos: TodoType[]
}

const TodosContainer: React.FC<Props> = ({todos}) => {
  return (
    <div className='todos-container'>
      {todos.map( (e: TodoType, i: number) => {
        return <Todo todo={e} key={e.todo_id}/>
      })}
    </div>
  );
}

export default TodosContainer;
