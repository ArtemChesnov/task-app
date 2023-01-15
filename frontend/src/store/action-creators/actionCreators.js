import axios from 'axios';
import {
  GET_ALL,
  ADD_TASK,
  COMPLETE_TASK,
  REMOVE_TASK,
  UPDATE_TASK,
  TASK_LOADING,
  TASK_ERROR,
} from '../actions/types';
import { nanoid } from 'nanoid';

export const getTasks = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: TASK_LOADING });

      const { data } = await axios.get('http://localhost:3013/');

      dispatch({
        type: GET_ALL,
        tasks: data,
      });
    } catch (e) {
      dispatch({
        type: TASK_ERROR,
        payload: 'Не удалось загрузить задачи!',
      });
    }
  };
};

export const addTask = (title) => {
  return async (dispatch) => {
    const newTask = {
      id: nanoid(),
      title: title,
      completed: false,
    };

    try {
      dispatch({ type: TASK_LOADING });

      const { data } = await axios.post('http://localhost:3013/add', newTask);

      if (data.result === 1) {
        dispatch({
          type: ADD_TASK,
          payload: newTask,
        });
      }
    } catch (e) {
      dispatch({
        type: TASK_ERROR,
        payload: 'Не удалось добавить задачу!',
      });
    }
  };
};

export const completeTask = (task) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TASK_LOADING });

      const { data } = await axios.put(
        `http://localhost:3013/complete/${task.id}`,
        task.id,
      );

      if (data.result === 1) {
        dispatch({
          type: COMPLETE_TASK,
          payload: task,
        });
      }
    } catch (e) {
      dispatch({
        type: TASK_ERROR,
        payload: 'Что-то пошло не так...',
      });
    }
  };
};

export const updateTask = (task) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TASK_LOADING });

      const { data } = await axios.put(
        `http://localhost:3013/update/${task.id}`,
        task,
      );

      if (data.result === 1) {
        dispatch({
          type: UPDATE_TASK,
          payload: task,
        });
      }
    } catch (e) {
       dispatch({
         type: TASK_ERROR,
         payload: 'Что-то пошло не так...',
       });
    }
  };
};

export const removeTask = (task) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TASK_LOADING });

      const { data } = await axios.delete(
        `http://localhost:3013/remove/${task.id}`,
        task,
      );
      if (data.result === 1) {
        dispatch({
          type: REMOVE_TASK,
          payload: task,
        });
      }
    } catch (e) {
      dispatch({
        type: TASK_ERROR,
        payload: 'Не удалось удалить задачу!',
      });
    }
  };
};
