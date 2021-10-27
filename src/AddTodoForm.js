import * as React from 'react';

function AddTodoForm(){
  return(
    <div>
      <label htmlFor="todoTitle">Title:</label>
      <input id="todoTitle" type="text" />
      <input type="submit" value="Add">
    </div>

  );
}

export default AddTodoForm;
