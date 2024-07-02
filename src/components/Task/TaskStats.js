import React from "react";
import { useSelector } from "react-redux";

const TaskStats = () => {
  const tasks = useSelector((state) => state.tasks);
  const completedTasks = tasks.filter((task) => task.completed).length;
  const incompleteTasks = tasks.length - completedTasks;

  return (
    <div className="text-right">
      <div className="mt-2">
        <div className="flex items-center">
          <span className="text-xl font-bold text-green-500">
            {completedTasks}
          </span>
          <span className="ml-1 font-bold text-gray-600">Completed</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-xl font-bold text-red-500">
            {incompleteTasks}
          </span>
          <span className="ml-1 font-bold text-gray-600">Incomplete</span>
        </div>
      </div>
    </div>
  );
};

export default TaskStats;
