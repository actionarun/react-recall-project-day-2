
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <h1>Task Manager</h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/tasks/new">New Task</Link>
    </div>
    </>
  )
}

export default Navbar