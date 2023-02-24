# Losung360-assignment

## To-Do Application
This is a simple to-do application built using React and a REST API. The application allows users to create, edit, and delete tasks.

<img width="1440" alt="Screenshot 2023-02-24 at 9 31 21 AM" src="https://user-images.githubusercontent.com/114471571/221091009-6a8fc7cc-f66f-4ee3-a7b2-ba6bdcff8bd3.png">

Checkout the deployed live version on [Netlify](https://curious-sundae-7bf33d.netlify.app/).


## Getting Started

To run the application with Glitch as server, follow these steps:

1. Clone this repository to your local machine using https://github.com/peeyush-shivam/Losung360-assignment.git.
2. In the project directory, run `yarn` to install the project dependencies.
3. Run `yarn dev` to start the application.
4. Open your browser and navigate to `http://localhost:----/`.


## Dependencies

The application has the following dependencies:

- `axios`: A promise-based HTTP client used to make API calls.
- `react`: A JavaScript library used for building user interfaces.
- `react-dom`: A package that provides DOM-specific methods that can be used at the top level of a web application.

## Components

The application is composed of several components:

- `App.jsx`: The main component that renders the TodoList and TodoCreate components.
- `TodoCreate.jsx`: A component that allows the user to create a new task.
- `TodoEdit.jsx`: A component that allows the user to edit an existing task.
- `TodoList.jsx`: A component that displays a list of tasks.
- `TodoShow.jsx`: A component that displays the details of a task.
- The state and functions required by these components are provided by a context created in `context.jsx` and accessed using the custom hook defined in `useContextHook.jsx`.


## Contributing

Contributions to this repository are always welcome. If you find any issues or have any suggestions for improvement, please submit an issue or pull request.
