import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';


function TaskDetails() {
  const { id } = useParams();
const { tasks } = useContext(TaskContext);

const task = tasks.find(task => task.id === Number(id));
  
  return (
   <div className="details-card">
    {task ? (
      <>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>Status: {task.completed ? "Completed" : "Pending"}</p>
      </>
    ) : (
      <h2>Task Not Found</h2>
    )}

    <Link to="/tasks">Back to Tasks</Link>
  </div>
  )
}

export default TaskDetails