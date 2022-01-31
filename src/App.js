import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {

  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);

  React.useEffect(() =>{
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
    {headers:{ Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}})
    .then((response) => response.json())
    .then((result) =>
    {
      setIsloading(false);
      setTodoList(result.records);
    }
  )});

  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  function addTodo(newTodo) {
   setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
   let newTodoList = todoList.filter((todo) => {
     return todo.id !== id;
    });
    setTodoList(newTodoList);
  }

  return (
   <>
    <h1>Todo List</h1>
    <AddTodoForm onAddTodo={addTodo}/>
    { isLoading ? (
    <p>Loading...</p>
    ) : (
    <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    )}
    </>
  );
}

export default App;
