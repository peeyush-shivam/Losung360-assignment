import { useState} from "react";
import useContextHook from "../custom_hooks/useContextHook";

function TodoEdit({todo, onSubmit}) {
  const { editTodo } = useContextHook(); // Import editTodo function using the useContextHook custom hook

  // State to store edited todo title
  const [editedTitle, setEditedTitle] = useState(todo.title);

  // Handle change of edited title
  const handleEdit = (event) => {
    setEditedTitle(event.target.value);
  };

  // Handle form submission for updating todo title
  const changeTitle = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    onSubmit(); // Call parent component's onSubmit function to close the edit form
    editTodo(todo.id, editedTitle); // Call editTodo function from context to update the todo title
  };

  // Return the todo edit form
  return (
    <form className="todo-edit" onSubmit={changeTitle}>
      <input className="edit-input" value={editedTitle} onChange={handleEdit} />
      <button className="save-edit">Save</button>
    </form>
  );
};

export default TodoEdit;
