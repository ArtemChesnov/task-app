import {
  ADD_TASK,
  COMPLETE_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
  GET_ALL,
  TASK_ERROR,
  TASK_LOADING,
} from '../actions/types';

const initialState = {
  tasks: [],
  error: null,
  loading: true,
};

export function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case TASK_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TASK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ALL:
      return {
        ...state,
        tasks: action.tasks,
        loading: false,
        error: null,
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        loading: false,
        error: null,
      };

    case UPDATE_TASK:
      const updateTask = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...action.payload, title: action.payload.title }
          : task,
      );
      return {
        ...state,
        tasks: updateTask,
        loading: false,
        error: null,
      };

    case COMPLETE_TASK:
      const completeTask = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...action.payload, completed: !action.payload.completed }
          : task,
      );
      return {
        ...state,
        tasks: completeTask,
        loading: false,
        error: null,
      };

    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
