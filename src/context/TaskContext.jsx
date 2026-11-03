import {createContext, useState} from 'react';
export const TaskContext = createContext();
export  function TaskProvider({children}) {
  const [tasks, setTasks] = useState([]);
  
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




  return (
    <TaskContext.Provider value={{tasks, setTasks,addTask,deleteTask,}}>
      {children}
    </TaskContext.Provider>
  )
}
