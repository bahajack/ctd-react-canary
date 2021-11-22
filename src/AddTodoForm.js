import * as React from 'react';

const AddTodoForm = ({onAddTodo}) => {
  const [todoTitle, setTodoTitle] = React.useState('');
  const handleTitleChange = (event) => {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }
  const handleAddTodo = (event) => {
    event.preventDefault();


    console.log(todoTitle);

    onAddTodo({
      id: Date.now(),
      title: todoTitle,
    })
    setTodoTitle('')
  };
  return(
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title:</label>
      <input name="title" id="todoTitle" value={todoTitle} onChange={handleTitleChange} />
      <input type="submit" value="Add" />
    </form>

  );
}

export default AddTodoForm;
