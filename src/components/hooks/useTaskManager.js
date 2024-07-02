import { useState } from "react";

const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: updatedTask } : task
      )
    );
  };

  return {
    tasks,
    addTask,
    deleteTask,
    editTask,
  };
};

export default useTaskManager;
