

const todoList = [
  {
    id: 1,
    title: "Complete assignment",

  },
  {
    id: 2,
    title: "Push to github",

  },
  {
    id: 3,
    title: "Pull the assignment's link",

  },

];

function TodoList(){
  return(
    <ul>
      {todoList.map(function (item) {
         return (
           <li key={item.id}>

            <span>{item.title}</span>

            </li>
           );
         })}
       </ul>
      );
     }

export default TodoList;
