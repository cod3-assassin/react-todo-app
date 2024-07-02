import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import { FaPlus } from "react-icons/fa";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <div className="flex flex-col items-center mb-6">
      <div className="flex w-full shadow-lg rounded-lg overflow-hidden">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Add a new task"
        />
        <button
          onClick={handleAddTask}
          className="bg-green-500 text-white p-2 rounded-r-lg hover:bg-green-600"
        >
          <FaPlus className="shadow-md" />
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
