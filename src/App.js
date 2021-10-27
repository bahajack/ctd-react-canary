import * as React from 'react';
import TodoList from './TodoList.js';
import AddTodoForm from './AddTodoForm.js';


function App() {
  return (

    <h1>Todo List</h1>
     <div>
       <AddTodoForm />
       <TodoList />
     </div>


);
}
export default App;
