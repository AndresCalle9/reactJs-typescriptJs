import { useState } from 'react';
import TaskComponent from '../components/TaskComponent/TaskComponent';

interface TaskModel {
  name: string;
  done: boolean;
  date: string;
}

const TaskApp = () => {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [task, setTask] = useState<string>('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      { name: task, done: false, date: new Date().toLocaleString() },
    ]);
    setTask('');
  };
  const onChange = (e: any) => {
    setTask(e.target.value);
  };
  const updateList = (index: number) => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  return (
    <div>
      <a href='/'>Home</a>
      <a href='/landing'>Landing</a>

      <h1>TasksApp</h1>
      <div className='container pt-4'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>Tareas</h5>
              </div>
              <div className='card-text p-3'>
                <form onSubmit={handleSubmit}>
                  <input
                    type='text'
                    className='form-control'
                    onChange={onChange}
                    value={task}
                    placeholder='Ingrese el nombre de la tarea'
                  />
                  <br />
                  <button className='btn btn-primary w-100'>
                    Agregar tarea
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='container pt-4'>
          <div className='row'>
            <div className='col-md-6 offset-md-3'>
              <ul className='list-group'>
                {tasks.map((task, index) => (
                  <li key={(index + 1).toString()} className='list-group-item'>
                    <TaskComponent
                      name={task.name}
                      done={task.done}
                      date={task.date}
                      index={index}
                      deleteTask={(index: number) => {
                        updateList(index);
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
