import thunk from 'redux-thunk';
import { tasksReducer } from './reducers/reducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
