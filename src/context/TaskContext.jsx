import {createContext, useState ,useEffect } from 'react';
export const TaskContext = createContext();
export  function TaskProvider({children}) {
  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");

  return savedTasks ? JSON.parse(savedTasks) : [];
});
  
  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

 function addTask(task) {
  const newTask = {
    ...task,
    id: Date.now(),
    completed: false
  };

  setTasks((prevTask) => [...prevTask, newTask]);
}
function deleteTask(id) {
  setTasks(tasks.filter((task) => task.id !== id));
}

function toggleTask(id){
  setTasks(tasks.map((task)=>
    task.id ===id
   ?{...task,completed:!task.completed}
   :task
  ))
}

function editTask(updatedTask) {
  setTasks(tasks.map((task) =>
    task.id === updatedTask.id
      ? { ...task, title: updatedTask.title, description: updatedTask.description }
      : task
  ));
}


  return (
    <TaskContext.Provider value={{tasks, setTasks,addTask,deleteTask,toggleTask,editTask}}>
      {children}
    </TaskContext.Provider>
  )
}
