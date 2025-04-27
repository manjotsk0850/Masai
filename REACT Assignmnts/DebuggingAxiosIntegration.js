import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  const fetchData = () => {
    axios("https://your-firebase-db.firebaseio.com/tasks.json")
      .then((response) => {
        // Parse and map the response data to an array
        const fetchedTasks = Object.keys(response.data).map((key) => ({
          id: key,
          name: response.data[key].name,
        }));
        setTasks(fetchedTasks);
      })
      .catch((error) => {
        console.log("Error fetching tasks:", error);
        setError('Failed to load tasks. Please try again later.');
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;