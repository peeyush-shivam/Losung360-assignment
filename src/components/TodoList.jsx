import TodoShow from "./TodoShow";
import useContextHook from "../custom_hooks/useContextHook";

function TodoList() {
  // Get the todos array and deleteTodo function from the custom useContextHook hook
  const { todos, deleteTodo } = useContextHook();

  // Define a function to delete all checked todos
  const handleDeleteChecked = () => {
    // Filter the todos array to get all checked todos
    const checkedTodos = todos.filter(todo => todo.isChecked);
    // Delete each checked todo
    checkedTodos.forEach(todo => deleteTodo(todo.id));
  };

  // Map the todos array to an array of TodoShow components and store in a variable
  const renderedTodoList = todos.map((todo) => {
    return (
      <TodoShow
        key={todo.id}
        todos={todo}
      />
    );
  });

  // Return a JSX component that displays the list of todos and a "delete checked items" button
  return (
    <div className="todo-list">
      {renderedTodoList}
      {todos.length > 0 ? <button onClick={handleDeleteChecked}>Delete Checked Items</button> : <p>Your List is empty!</p> }
    </div>
  );
}

export default TodoList;
