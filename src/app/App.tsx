import React from 'react'; // Importing React library
import { TaskProvider } from '../shared/context/TaskContext'; // Importing TaskProvider from TaskContext
import TaskList from '../entities/task/ui/TaskList'; // Importing TaskList component
import AddTaskForm from '../features/AddTask/ui/AddTaskForm'; // Importing AddTaskForm component

// App component
const App = () => {
  return (
    // Wrapping the application with TaskProvider to manage the task state
    <TaskProvider>
      <div className="container mx-auto pt-9"> {/* Container div with Tailwind CSS classes */}
        <div className="font-extrabold text-white text-2xl w-full flex justify-center pb-12">
          {/* Application header */}
          TASK MANAGER
        </div>
          <AddTaskForm /> {/* Component to add a new task */}
          <TaskList /> {/* Component to display the list of tasks */}
      </div>
    </TaskProvider>
  );
};

export default App; // Exporting the App component as the default export
