import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, toggleTask } from "../redux/actions";
import { FaTrash, FaCheck, FaPen } from "react-icons/fa";

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask(task.id, newText));
    setIsEditing(false);
  };

  return (
    <div
      className={`flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-md transition duration-500 ease-in-out ${
        task.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleTask(task.id))}
          className="mr-2"
        />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border p-2 rounded w-full focus:outline-none focus:border-green-500"
          />
        ) : (
          <span
            className={`flex-grow ${
              task.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
            onClick={() => dispatch(toggleTask(task.id))}
          >
            {task.text}
          </span>
        )}
      </div>
      <div className="flex items-center">
        {isEditing ? (
          <button
            onClick={handleEdit}
            className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 ml-2"
          >
            <FaCheck />
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-black hover:text-yellow-700 mr-2"
          >
            <FaPen className="shadow-md" />
          </button>
        )}
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="text-red-500 hover:text-red-700"
        >
          <FaTrash className="shadow-md" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
