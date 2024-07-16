import React, { useContext, useState } from 'react';
import { Task } from '../../types/task';
import { TaskContext } from '../../../shared/context/TaskContext';
import EditTaskModal from '../../../features/EditTask/ui/EditTaskModal';

// Define the props for the TaskItem component
interface TaskItemProps {
  task: Task;
}

// TaskItem component to render individual task items
const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  // Use the TaskContext to access the toggleTask and deleteTask functions
  const { toggleTask, deleteTask } = useContext(TaskContext);
  // State to manage the edit modal visibility
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className={`flex justify-between items-center p-2 border-b text-white text-xl font-bold py-8 ${task.isDone ? 'bg-slate-600' : 'bg-transparent'}`}>
      <div className="flex items-center space-x-5 relative pl-8 w-full">
        {/* Checkbox to mark task as done */}
        <input
          className="text-violet-500 focus:ring-violet-300 border-gray-300 peer rounded-lg w-6 h-6 absolute top-1 left-1"
          id="custom-checkbox"
          name="custom-checkbox"
          type="checkbox"
          checked={task.isDone}
          onChange={() => toggleTask(task.id)}
        />        
        {/* Display task title and description */}
        <p className={`text-lg`}>{task.title}</p>
        <p>{task.description}</p>
        {/* Display attached file if available */}
        {task.file && (
          <a
            href={URL.createObjectURL(task.file)}
            download={task.file.name}
            className="text-blue-500"
          >
            {task.file.name}
          </a>
        )}
      </div>
      <div className="flex flex-row space-x-5">
        {/* Button to open edit modal */}
        <button className="text-yellow-500" onClick={() => setIsEditing(true)}>
          Edit
        </button>
        {/* Button to delete the task */}
        <button className="text-red-500" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
      {/* Render the EditTaskModal if isEditing is true */}
      {isEditing && <EditTaskModal task={task} onClose={() => setIsEditing(false)} />}
    </li>
  );
};

export default TaskItem;
