import { useEffect } from "react";
import TodoList from "./components/TodoList";
import './App.css';
import TodoCreate from "./components/TodoCreate";
import useContextHook from "./custom_hooks/useContextHook";

function App() {
  // Get the fetchTodos function from the custom useContextHook hook
  const { fetchTodos } = useContextHook();

  // Fetch todos when the component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  // Return a JSX component that displays the application
  return (
    <div className="app">
      <TodoList />
      <TodoCreate />
    </div>
  );
}

export default App;
