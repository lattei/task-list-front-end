import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
    update: updateTaskData,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [ taskData, setTaskData ] = useState(TASKS)

  const updateTaskData = (id) => {
    const updatedTasks = taskData.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      } else {
          return task;
      }
    });

    setTaskData(updatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={TASKS} onUpdateTaskData={updateTaskData} /></div>
      </main>
    </div>
  );
};

export default App;
