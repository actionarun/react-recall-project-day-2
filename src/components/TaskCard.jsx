
function TaskCard({ task, onDelete, onToggle, onEdit }) {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>

      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
      <button onClick={() => onEdit(task)}>
  Edit
</button>
      <p>Status: {task.completed ? "Completed" : "Pending"}</p>
      <button onClick={() => onToggle(task.id)}>
        {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
      
    </div>
  );
}

export default TaskCard;