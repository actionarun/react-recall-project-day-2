
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function Navbar() {
  const { tasks } = useContext(TaskContext);
  return (
    <>
    <h1>Task Manager</h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/tasks/new">New Task</Link>
      <p>Total Tasks: {tasks.length}</p>
    </div>
    </>
  )
}

export default Navbar