import { Header } from './components/Header/Header';
import { TaskForm } from './components/TaskList/TaskForm';
import { TaskList } from './components/TaskList/TaskList';

export const App = () => {
  return (
    <>
      <Header />
      <TaskForm />
      <TaskList />
    </>
  );
};
