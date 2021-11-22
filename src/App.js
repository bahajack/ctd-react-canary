import * as React from 'react';
import TodoList from './TodoList.js';
import AddTodoForm from './AddTodoForm.js';


function App() {
   const [todoList,setTodoList] = React.useState([]);
   const addTodo = (newTodo) => {
   setTodoList([...todoList,newTodo])
   }
  return (

      <h1>Todo List</h1>,
      <div>
      <AddTodoForm onAddTodo={addTodo} />

      <TodoList todoList={todoList} />
      </div>



);
}
export default App;
