import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  TOGGLE_TASK,
  SET_TASKS,
} from "./actions";
import { loadFromLocalStorage } from "../utils/storage";

const initialState = {
  tasks: loadFromLocalStorage("tasks") || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTasks = [
        ...state.tasks,
        { id: Date.now(), text: action.payload, completed: false },
      ];
      return {
        ...state,
        tasks: newTasks,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, text: action.payload.updatedTask }
            : task
        ),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
