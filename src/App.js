import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

// starter data to assign as default data in useState
const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: false,
  },
];

const App = () => {
  const [ taskData, setTaskData ] = useState(TASKS);

  // function to take the updated task from the Task component
  // and update the TaskData to reflect that changes to the updated task
  const updateTaskData = (updatedTask) => {
    const updatedTasks = taskData.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      } else {
          return task;
      }
    });

    setTaskData(updatedTasks);
  };

  // function to filter out the task with the matching id
  // from our previous task data
  const deleteTask = (id) => {
    setTaskData((prev) => prev.filter(((task) => task.id !== id)));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList 
            tasks={taskData} 
            onUpdateTaskData={updateTaskData}
            onDeleteTask={deleteTask} />
        </div>
      </main>
    </div>
  );
};

export default App;
