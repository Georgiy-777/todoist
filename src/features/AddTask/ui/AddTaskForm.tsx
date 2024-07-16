import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TaskContext } from '../../../shared/context/TaskContext'; // Importing TaskContext for accessing addTask function
import Input from '../../../shared/ui/Input'; // Importing reusable Input component
import Button from '../../../shared/ui/Button'; // Importing reusable Button component

interface IFormInput {
  title: string;
  description: string;
  file: FileList; // FileList type for handling file input
}

const AddTaskForm = () => {
  const { addTask } = useContext(TaskContext); // Using useContext to access addTask function from TaskContext
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>(); // Destructuring methods and state from useForm hook

  // Submit handler function
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const file = data.file[0]; // Accessing the first file from FileList
    // Calling addTask function with task data and resetting form
    addTask({ id: Date.now(), title: data.title, description: data.description, isDone: false, file });
    reset(); // Resetting the form after submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center flex-col w-[100%] space-y-5">
      {/* Input component for task title */}
      <Input
        {...register('title', { required: 'Title is required' })}
        placeholder="Title"
        error={errors.title?.message} // Displaying error message if title is not provided
      />
      {/* Input component for task description */}
      <Input
        placeholder="Description"
        {...register('description', { required: 'Description is required' })}
        error={errors.description?.message} // Displaying error message if description is not provided
      />
      {/* Input component for file upload */}
      <Input
        type="file"
        {...register('file')} // Registering file input with react-hook-form
      />
      {/* Button component for form submission */}
      <Button type="submit" text='Add Task'/> {/* Submit button to add task */}
    </form>
  );
};

export default AddTaskForm;
