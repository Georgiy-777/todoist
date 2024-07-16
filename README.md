# Mini copy of todoist

This project was realized on the React using the TS

## Demo

https://todoist-blond-seven.vercel.app/

## Documentation
Realized all the conditions of the building but at one point withdrew for compulsory reasons. Instead of Redis and Docker I just used Postgres and Typeorm because the work laptop with Linux was temporarily in repair and worked on Windows, where to deploy successfully these technologies did not work (virtualization is not supported). But otherwise I tried to adhere to the task in detail. 

At the expense of units of measurement in the code conditionally took the standard parameters of the sensor in the pixel 200 * 300 led conditionally to millimeters and then performed the translation into meters or meters per second if it is about speed, and time in seconds.


## Features

- Adding a task:
    A form for adding a new task with fields for a name, description, and file upload. There is an auto-sorting by status, i.e. completed tasks move to the bottom of the list, while incomplete tasks move up
    The new task has a status of “not completed” by default.
- Editing a task:
    The user can edit the task name, description, and attached file.
    The task status can be changed (completed/uncompleted).
- Deleting a task:
    The user can delete a task.
- Data storage:
    Use local state or context (React Context API) to store data.
- Styling:
   Tailwind CSS.


## Authors

- [web_dev](https://github.com/Georgiy-777)

