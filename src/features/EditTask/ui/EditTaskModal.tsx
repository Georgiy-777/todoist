import React, { useState, useContext } from 'react';
import { Task } from '../../../entities/types/task';
import { TaskContext } from '../../../shared/context/TaskContext';
import Button from '../../../shared/ui/Button';
import Input from '../../../shared/ui/Input';

interface EditTaskModalProps {
  task: Task; // Props interface defining properties for EditTaskModal component
  onClose: () => void; // Function prop to handle modal close action
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ task, onClose }) => {
  const { editTask } = useContext(TaskContext); // Accessing editTask function from TaskContext using useContext hook
  const [title, setTitle] = useState(task.title); // State for task title input
  const [description, setDescription] = useState(task.description); // State for task description input
  const [file, setFile] = useState<File | undefined>(task?.file); // State for file input, initialized with task file if available
  const [isRemove, setIsRemove] = useState<boolean>(false); // State to track if file removal action is triggered

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    editTask({ ...task, title, description, file }); // Call editTask function from context with updated task details
    onClose(); // Close modal after task edit operation
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-500 p-7 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-slate-800">Edit Task</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <Input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input 
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Display current file and remove button if file exists */}
          {(file && !isRemove) && (
            <div className="flex items-center space-x-2">
              <span>{file.name}</span>
              <button
                type="button"
                onClick={() => { setIsRemove(true); setFile(undefined); }}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          )}
          {/* Display file input if no file or removal action is triggered */}
          {(!file || isRemove) &&
            <Input 
              type="file"
              onChange={(e) => setFile(e.target?.files ? e.target?.files?.[0] : undefined)}
            />
          }
          {/* Save and Cancel buttons */}
          <Button type="submit" text='Save'/>
          <Button type="button" text='Cancel' onClick={onClose}/>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
