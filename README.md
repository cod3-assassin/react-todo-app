# React To-Do Application

This project is a simple To-Do application built using React.js, Redux for state
management, and Tailwind CSS for styling.

![React To-Do Application Demo](demo.gif)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a basic To-Do application developed with React.js, showcasing
fundamental concepts such as component-based architecture, state management with
Redux, and responsive design using Tailwind CSS. Users can add, view, edit, mark
as completed, and delete tasks.

## Features

- **Add Task**: Input new tasks and add them to the list.
- **View Tasks**: Display all added tasks in a list format.
- **Edit Task**: Modify existing tasks directly from the task list.
- **Delete Task**: Remove tasks from the list.
- **Mark as Completed**: Toggle tasks between completed and incomplete states.
- **Persistent Storage**: Tasks are saved locally using browser storage
  (localStorage), ensuring data persistence on page reload.
- **Responsive Design**: Fully responsive design for optimal viewing on various
  devices.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/cod3-assassin/react-todo-app.git
   cd react-todo-app
   ```

2. **Install Node.js and npm:**

   Ensure you have Node.js and npm installed on your machine. You can download
   them from [nodejs.org](https://nodejs.org/).

3. **Install project dependencies:**

   After cloning the repository and navigating to the project directory, install
   dependencies using npm:

   ```bash
   npm install
   npm install redux react-redux
   npm install react-icons

   ```

   This will install all required dependencies listed in `package.json`,
   including development dependencies for Tailwind CSS setup.

   ```bash
   npm install -D tailwindcss
   npx tailwindcss init

   ```

## Usage

To start the development server and view the application in your browser:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Folder Structure

The project structure follows a standard React application structure with
additional folders for Redux state management, custom hooks, and styling:

```
/react-todo-app
|-- /public
|   |-- index.html
|   |-- favicon.ico
|-- /src
|   |-- /components
|   |   |-- /Task
|   |       |-- TaskInput.jsx
|   |       |-- TaskList.jsx
|   |       |-- TaskItem.jsx
|   |-- /redux
|   |   |-- actions.js
|   |   |-- reducers.js
|   |   |-- store.js
|   |-- /hooks
|   |   |-- useTaskManager.js
|   |-- /utils
|   |   |-- storage.js
|   |-- App.js
|   |-- index.js
|   |-- index.css
|-- package.json
|-- README.md
```

## Dependencies

- `@testing-library/jest-dom`, `@testing-library/react`,
  `@testing-library/user-event`: Testing utilities for React components.
- `react`, `react-dom`: Core React library and DOM rendering.
- `react-icons`: Icons for UI elements.
- `react-redux`: Official Redux bindings for React.
- `react-scripts`: Scripts and configurations for React applications.
- `redux`: Predictable state container for JavaScript apps.
- `web-vitals`: Library for measuring web vitals performance metrics.
- `tailwindcss`: Utility-first CSS framework for styling.

## Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode. Open
  [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Ejects the project configuration for full control over
  configuration files and dependencies.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.

---
