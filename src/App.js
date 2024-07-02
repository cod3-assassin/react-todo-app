import React from "react";
import TaskInput from "./components/Task/TaskInput";
import TaskList from "./components/Task/TaskList";
import TaskStats from "./components/Task/TaskStats";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-2xl p-8 border-2 border-gray-300">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-left text-gray-800">
            To-Do App
          </h1>
          <TaskStats />
        </div>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
