import { createContext, useState } from "react";
import axios from "axios";

// Create a new context for the application
const todoContext = createContext();

// Define a function component that serves as a provider for the context
function Provider({ children }) {
  // Define a state variable for the todos and initialize it as an empty array
  const [todos, setTodos] = useState([]);

  // Define a function that fetches todos from a REST API and updates the todos state
  const fetchTodos = async () => {
    const response = await axios.get("https://petalite-equatorial-handspring.glitch.me/todos");
    setTodos(response.data);
  };

  // Define a function that creates a new todo using a REST API and fetches the updated list of todos
  const createTodo = async (title) => {
    await axios.post("https://petalite-equatorial-handspring.glitch.me/todos", {
      title: title,
      isChecked: false,
    });
    fetchTodos();
  };

  // Define a function that deletes a todo using a REST API and fetches the updated list of todos
  const deleteTodo = async (id) => {
    await axios.delete(`https://petalite-equatorial-handspring.glitch.me/todos/${id}`);
    fetchTodos();
  };

  // Define a function that edits a todo using a REST API and fetches the updated list of todos
  const editTodo = async (id, newTitle) => {
    await axios.put(`https://petalite-equatorial-handspring.glitch.me/todos/${id}`, {
      title: newTitle,
    });
    fetchTodos();
  };

  // Define an object containing the state and functions to be shared with child components
  const toShare = {
    todos,
    fetchTodos,
    editTodo,
    deleteTodo,
    createTodo,
  };

  // Return a JSX component that provides the context to its child components
  return (
    <todoContext.Provider value={toShare}>{children}</todoContext.Provider>
  );
}

export { Provider };
export default todoContext;
