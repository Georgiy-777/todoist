import React, { useContext } from 'react';
import { TaskContext } from '../../../shared/context/TaskContext';
import TaskItem from './TaskItem';
import { type Task } from '../../types/task'

const TaskList = () => {
  // Retrieve tasks array from TaskContext
  const { tasks } = useContext(TaskContext);

  // Sort tasks: first those with isDone === false, then isDone === true
  const sortedTasks = tasks.slice().sort((a: Task, b: Task) => {
    if (a.isDone === b.isDone) {
      return 0;
    } else if (a.isDone) {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <div className='p-8'>
      <ul>
        {/* Map through sorted tasks and render TaskItem for each */}
        {sortedTasks.map((task: Task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
