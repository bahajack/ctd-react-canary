import * as React from 'react';

function AddTodoForm(){
  return(
    <form>
      <label htmlFor="todoTitle">Title:</label>
      <input id="todoTitle" type="text" />
      <input type="submit" value="Add" />
    </form>

  );
}

export default AddTodoForm;
