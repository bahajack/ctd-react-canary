import * as React from 'react';

const AddTodoForm = ({onAddTodo}) => {
  const handleAddTodo = (event) => {
    event.preventDefault();

    const todoEl = document.getElementById('todoTitle');
    const todoTitle = todoEl.value;
    console.log(todoTitle);
    event.target.reset();
    onAddTodo(todoTitle);
  }
  return(
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title:</label>
      <input name="title" id="todoTitle" type="text" />
      <input type="submit" value="Add" />
    </form>

  );
}

export default AddTodoForm;
