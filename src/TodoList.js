import * as React from 'react';
import TodoListItem from './TodoListItem.js';

const todoList = [
  {
    id: 1,
    title: "Complete assignment",

  },
  {
    id: 2,
    title: "Push to github",

  },
  {
    id: 3,
    title: "Pull the assignment's link",

  },

];

function TodoList(){
  return(
    <ul>
      {todoList.map(item => {
         return <TodoListItem todo={item} key={item.id} />


         })}
       </ul>
      );
     }

export default TodoList;
