import React from 'react';

const TodoListItem = ({id, title, onRemoveTodo}) => {
    const headleRemoveTodo = (e) => {
        onRemoveTodo(id);
    };
    return (
    <li key="{id}">
        {title}
        <button onClick={headleRemoveTodo}>Remove</button>
    </li>
    );
};

export default TodoListItem; 
