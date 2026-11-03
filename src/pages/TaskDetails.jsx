import useParams from 'react-router-dom';

function TaskDetails() {
  const { id } = useParams();
  
  return (
    <div>TaskDetails</div>
  )
}

export default TaskDetails