import * as React from 'react';
import TodoList from './TodoList.js';
import AddTodoForm from './AddTodoForm.js';


function App() {
   const [newTodo, setNewTodo] = React.useState('');
  return (

      <h1>Todo List</h1>,
      <div>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList />
      </div>



);
}
export default App;
