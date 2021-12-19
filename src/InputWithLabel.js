import React, {Fragment} from 'react';


const InputWithLabel = (props

) => {
const inputRef = React.useRef();

React.useEffect(() => {
    inputRef.current.focus()

});

  return(

    <Fragment>

      <label htmlFor="todoTitle">{props.children}</label>
      &nbsp;
      <input
        ref={inputRef}
        id="todoTitle"
        type="text"
        name="title"
        value={props.todoTitle}
        onChange={props.handleTitleChange}

      ></input>

    </Fragment>
  );
};

export default InputWithLabel;
