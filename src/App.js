import {React, useState, useEffect} from 'react';
import TodoList from './TodoList.js';
import AddTodoForm from './AddTodoForm.js';
//import InputWithLabel from './InputWithLabel.js';

const useSemiPersistentState = () => {
  const [todoList,setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);
  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);
  return [todoList, setTodoList];
};

function App() {
   const [todoList, setTodoList] = useSemiPersistentState();

   const addTodo = (newTodo) => {
   setTodoList([...todoList,newTodo]);
   }

const removeTodo = (id) => {
   const newTodo = todoList.filter((item) => {
     return item.id !== id;
   })
   setTodoList(newTodo);
};

  return (
    <>
      <h1>Todo List</h1>,

      <AddTodoForm onAddTodo={addTodo} />

      <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
    </>



);
}
export default App;
