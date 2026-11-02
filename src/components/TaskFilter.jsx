
function TaskFilter({ filter, setFilter }) {
  return (
    <>
      <button
        onClick={() => setFilter("all")}
      >
        All
      </button>

      <button
        onClick={() => setFilter("pending")}
      >
        Pending
      </button>

      <button
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </>
  );
}

export default TaskFilter;
