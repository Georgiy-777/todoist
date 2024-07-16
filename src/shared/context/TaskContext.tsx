import React, { createContext, useState } from 'react';
import { Task } from '../../entities/types/task';

// Interface to define the shape of the context
interface TaskContextType {
  tasks: Task[]; // Array of tasks
  addTask: (task: Task) => void; // Function to add a task
  editTask: (task: Task) => void; // Function to edit a task
  deleteTask: (id: number) => void; // Function to delete a task by id
  toggleTask: (id: number) => void; // Function to toggle task completion by id
}

// Props interface for TaskProvider component
interface TaskProviderProps {
  children: React.ReactNode; // Children elements to be wrapped by the provider
}

// Create the context with a default undefined value
export const TaskContext = createContext<TaskContextType | any>(undefined);

// TaskProvider component to manage tasks state and provide context to children
export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]); // State to store the list of tasks

  // Function to add a new task
  const addTask = (task: Task) => setTasks([...tasks, task]);

  // Function to edit an existing task
  const editTask = (updatedTask: Task) => setTasks(
    tasks.map(task => task.id === updatedTask.id ? updatedTask : task)
  );

  // Function to delete a task by id
  const deleteTask = (id: number) => setTasks(
    tasks.filter(task => task.id !== id)
  );

  // Function to toggle the completion status of a task by id
  const toggleTask = (id: number) => setTasks(
    tasks.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task)
  );

  // Provide the context value to children components
  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
};
