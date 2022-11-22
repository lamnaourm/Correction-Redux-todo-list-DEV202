import './App.css';
import AddTask from './components/AddTask';
import DeleteTasks from './components/DeleteTasks';
import ListTasks from './components/ListTasks';
import Statistiques from './components/Statistiques';

function App() {
  return (
    <div className='container'>
      <AddTask />
      <Statistiques />
      <ListTasks />
      <DeleteTasks />
    </div>
  );
}

export default App;
