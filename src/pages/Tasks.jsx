import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskForm from '../components/TaskForm';
import TaskFilter from '../components/TaskFilter';
import TaskCard from '../components/TaskCard';

function Tasks() {
 const {
  tasks,
  addTask,
  deleteTask,
  toggleTask,
  editTask
} = useContext(TaskContext);

  const [filter, setFilter] = useState("all");


 
  

  // Filter Tasks
  const filteredTasks = tasks.filter(task => {
    if (filter === "pending") return !task.completed;

    if (filter === "completed") return task.completed;

    return true;
  });

  function handleEdit(task) {
  const updatedTitle = prompt("Enter new title:", task.title);

  if (updatedTitle === null) return;

  const updatedDescription = prompt(
    "Enter new description:",
    task.description
  );

  if (updatedDescription === null) return;

  if (!updatedTitle.trim() || !updatedDescription.trim()) {
    alert("Fields cannot be empty");
    return;
  }

  editTask({
    ...task,
    title: updatedTitle.trim(),
    description: updatedDescription.trim()
  });
}

  return (
  <main className="page-container">
      <TaskForm onAddTask={addTask} />

      <TaskFilter
        filter={filter}
        setFilter={setFilter}
      />

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : filteredTasks.length === 0 ? (
        <p>No matching tasks found</p>
      ) : (
        filteredTasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
           onEdit={handleEdit}
          />
        ))
      )}
    </main>
  );
}

export default Tasks;
