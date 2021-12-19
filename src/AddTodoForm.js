import * as React from 'react';
import InputWithLabel from './InputWithLabel.js';



const AddTodoForm = ({onAddTodo}) => {
  const [todoTitle, setTodoTitle] = React.useState('');
  const handleTitleChange = (event) => {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }
  const handleAddTodo = (event) => {
    event.preventDefault();

      onAddTodo({
      id: Date.now(),
      title: todoTitle,
    })
    setTodoTitle('')
  };
  return(



    <form onSubmit={handleAddTodo}>
    <InputWithLabel
      todoTitle={todoTitle}
      handleTitleChange={handleTitleChange}
    >
    <strong>Title</strong>

    </InputWithLabel>
    <button type="submit">Add</button>
    </form>



  );

}

export default AddTodoForm;
