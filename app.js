import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>React To-Do List</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;







.app {
  text-align: center;
  margin: 50px;
}

h1 {
  color: #333;
}

.task-input {
  margin-bottom: 20px;
}

input {
  padding: 8px;
  margin-right: 10px;
}

button {
  padding: 8px;
  cursor: pointer;
}

.task-list {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

li button {
  margin-left: 10px;
  color: #fff;
  background-color: #ff0000;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
