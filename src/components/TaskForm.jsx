import React from 'react'
import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [task, SetTask]=useState({
    title:"",
    description:""
  })

 function taskFormSubmit(e) {
  e.preventDefault();

  const title = e.target.title.value;
  const description = e.target.description.value;

  if (!title.trim() || !description.trim()) {
    alert("Please fill all fields");
    return;
  }

  SetTask({ title, description });

  console.log({ title, description });
  onAddTask(task)
  SetTask({ title: "", description: "" });
}
  return (
    <>
    <form onSubmit={taskFormSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" value={task.title} 
      onChange={(e) => SetTask({ ...task, title: e.target.value })  } />
      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" value={task.description}
       onChange={(e) => SetTask({ ...task, description: e.target.value })}></textarea>
      <button type="submit">Add Task</button>
    </form>
    </>
  )
}

export default TaskForm