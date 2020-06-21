import React from "react";

function TodoItem(props) {
  return (
    <div>
     <input 
        type="checkbox" 
        checked={props.item.completed}
        onChange={()=> console.log("Changed!")}  
      />
     <p>{props.item.description}</p>

    </div>
  );
};

export default TodoItem;
