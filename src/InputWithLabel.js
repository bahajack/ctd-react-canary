import React, {Fragment} from 'react';


const InputWithLabel = (props
//{
//id,
//value,
//type = 'text',
//onInputChange,
//inFocused,
//children,
//}
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
        //id={id}
        id="todoTitle"
        //type={type}
        type="text"
        name="title"
        //value={value}
        value={props.todoTitle}
        onChange={props.handleTitleChange}
        //onChange={onInputChange}

      ></input>
      
    </Fragment>
  );
};

export default InputWithLabel;
