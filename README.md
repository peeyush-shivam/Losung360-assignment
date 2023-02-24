# Losung360-assignment

##To-Do Application
This is a simple to-do application built using React and a REST API. The application allows users to create, edit, and delete tasks.

<img width="1440" alt="Screenshot 2023-02-24 at 9 31 21 AM" src="https://user-images.githubusercontent.com/114471571/221091009-6a8fc7cc-f66f-4ee3-a7b2-ba6bdcff8bd3.png">

Run npm start to start the application.

##Getting Started
To run the application, follow these steps:

Clone this repository to your local machine using https://github.com/your-username/todo-app.git.
In the project directory, run npm install to install the project dependencies.
Run npm start to start the application.
######Dependencies
The application has the following dependencies:

axios: A promise-based HTTP client used to make API calls.
react: A JavaScript library used for building user interfaces.
react-dom: A package that provides DOM-specific methods that can be used at the top level of a web application.
react-scripts: A set of scripts and configuration used by Create React App.
####Components
The application is composed of several components:

App.jsx: The main component that renders the TodoList and TodoCreate components.
TodoCreate.jsx: A component that allows the user to create a new task.
TodoEdit.jsx: A component that allows the user to edit an existing task.
TodoList.jsx: A component that displays a list of tasks.
TodoShow.jsx: A component that displays the details of a task.
The state and functions required by these components are provided by a context created in context.jsx and accessed using the custom hook defined in useContextHook.jsx.

##Context
The context provides the state and functions required by the components. It contains the following functions:

fetchTodos: A function that fetches the list of tasks from the REST API.
createTodo: A function that creates a new task using the REST API.
editTodo: A function that edits a task using the REST API.
deleteTodo: A function that deletes a task using the REST API.
The context is created in context.jsx and used by the components through the custom hook defined in useContextHook.jsx.

Acknowledgements
