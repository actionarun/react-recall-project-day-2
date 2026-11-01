import { useState } from 'react'
import TaskForm from '../components/TaskForm'
function Tasks() {
  const [tasks, setTasks] =useState([]);
  function addTask(task) {
    setTasks([...tasks, task]);
  }

  return (
    <>
    <TaskForm onAddTask={addTask} />

   {tasks.length === 0 ? (
  <p>No tasks available</p>
) : (
  tasks.map((task, index) => (
    <div key={index}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  ))
)}
    </>
  )
}

export default Tasks