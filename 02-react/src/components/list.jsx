import { useState } from "react";

export function List() {
  const { todos, setTodos } = useState([]);
  const { inputValue, setInputValue } = useState("");
  function handleClick() {
    setTodos([...todos, inputValue]);
    
  }
  return (
    <div>
      <ul> 
        {todos.map((todo, index)=>(
            <li key={index} > {todo}</li>
        ))}</ul>
      <input
        type="text"
        onChange={(event) => {
          console.log(event.target.value);
          setInputValue(event.target.value);
        }}
      />
      <button onClick={handleClick}>Add to do</button>
    </div>
  );
}
