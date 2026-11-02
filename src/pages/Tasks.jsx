
import { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskCard from '../components/TaskCard';
import TaskFilter from '../components/TaskFilter';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // Add Task
  function addTask(task) {
    const newTask = {
      ...task,
      id: Date.now(),
      completed: false
    };

    setTasks([...tasks, newTask]);
  }

  // Delete Task
  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  // Toggle Completed / Pending
  function toggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    ));
  }

  // Filter Tasks
  const filteredTasks = tasks.filter(task => {
    if (filter === "pending") return !task.completed;

    if (filter === "completed") return task.completed;

    return true;
  });

  function onEdit(task) {
    const updatedTitle = prompt("Enter new title:", task.title);
    const updatedDescription = prompt("Enter new description:", task.description);  

    if (updatedTitle !== null && updatedDescription !== null) {
      setTasks(tasks.map(t =>
        t.id === task.id
          ? { ...t, title: updatedTitle, description: updatedDescription }
          : t
      ));
    }
  }

  return (
    <>
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
            onEdit={onEdit}
          />
        ))
      )}
    </>
  );
}

export default Tasks;
