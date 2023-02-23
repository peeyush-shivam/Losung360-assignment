import { useState } from "react";
import useContextHook from "../custom_hooks/useContextHook";

function TodoCreate() {
  // Get the createTodo function from the custom useContextHook hook
  const { createTodo } = useContextHook();

  // Define a state variable for the title of the new todo
  const [title, setTitle] = useState('');

  // Define a function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // If the title is not blank, create the new todo and clear the input
    if (title.trim()) {
      createTodo(title);
    } else {
      alert('Please enter a valid title')
    }
    setTitle('');
  }

  // Define a function to handle input changes
  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  // Return a JSX component that allows the user to create a new todo
  return (
    <div className="todo-create">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          value={title}
          onChange={handleChange}
          placeholder="Add Task"
        />
        <button className="button">Add</button>
      </form>
    </div>
  );
}

export default TodoCreate;
