import { useState } from "react";
import TodoEdit from "./TodoEdit";

function TodoShow({todos}) {

    // state for toggling edit mode
    const [showEdit, setShowEdit] = useState(false);
    // state for the checked state of the todo item
    const [isChecked, setIsChecked] = useState(false);

    // event handler for toggling edit mode
    const handleEdit = () => {
        setShowEdit(!showEdit);
    };

    // event handler for submitting the edit form
    const handleSubmit = () => {
        setShowEdit(false);
    };

    // event handler for changing the checked state of the todo item
    const handleCheckboxChange = (event) => {
        const newChecked = event.target.checked;
        setIsChecked(newChecked);
        if (newChecked) {
            // Mark the todo as checked
            todos.isChecked = true;
        } else {
            // Mark the todo as unchecked
            todos.isChecked = false;
        }
    };

    // toggle between the todo item text and the edit form
    let toggle = <h5 >{todos.title}</h5>
    if (showEdit) {
        toggle = <TodoEdit onSubmit={handleSubmit} todo={todos} />
    }

    // display the todo item and checkbox
    return (
        <div className="todo-show" onDoubleClick={handleEdit}>
            <div>{toggle}</div>
            <div className="actions">
                <input 
                    type="checkbox" 
                    checked={isChecked} 
                    onChange={handleCheckboxChange}
                    />
            </div>
        </div>
    );
};

export default TodoShow;
