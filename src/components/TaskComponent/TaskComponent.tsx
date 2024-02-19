import { useState } from 'react';
import './TaskComponent.scss';

interface TaskComponentProps {
  name: string;
  done: boolean;
  date: string;
  index: number;
  deleteTask: (index: number) => void;
}

const TaskComponent: React.FC<TaskComponentProps> = ({
  name,
  done,
  date,
  index,
  deleteTask,
}) => {
  const [isEditing, setIsEditing] = useState(done);
  const handleClick = (index: number) => {
    deleteTask(index);
  };
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {`${index} - ${name}`}
      <span className='badge bg-primary rounded-pill'>{date}</span>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          value=''
          id='flexCheckDefault'
          checked={isEditing}
          onChange={() => setIsEditing(!isEditing)}
        />
        <label
          className={
            isEditing ? 'form-check-label success' : 'form-check-label'
          }
          htmlFor='flexCheckDefault'
        >
          {isEditing ? 'Done' : 'Pending'}
        </label>
        <button
          className='btn btn-danger bi bi-trash'
          onClick={() => handleClick(index)}
        />
      </div>
    </li>
  );
};

export default TaskComponent;
