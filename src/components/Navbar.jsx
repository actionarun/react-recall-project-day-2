
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function Navbar() {
  const { tasks } = useContext(TaskContext);
  return (
   <header className="navbar">
  <h1>Task Manager</h1>
  <div className="nav-links">
    {/* Existing Links */}
    <p className="task-count">Total Tasks: {tasks.length}</p>
  </div>
</header>
  )
}

export default Navbar