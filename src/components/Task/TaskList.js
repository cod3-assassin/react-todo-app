import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskItem from "./TaskItem";
import { setTasks } from "../redux/actions";
import { saveToLocalStorage } from "../utils/storage";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    saveToLocalStorage("tasks", tasks);
  }, [tasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      dispatch(setTasks(storedTasks));
    }
  }, [dispatch]);

  return (
    <div className="p-4 space-y-4 max-h-96 overflow-y-auto shadow-lg rounded-lg">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
