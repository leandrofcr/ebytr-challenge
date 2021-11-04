import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskCard from '../components/taskCard';

const ENDPOINT = 'http://localhost:3000/tasks';

function Main() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(ENDPOINT);
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <h2>Tarefas</h2>
      <TaskCard tasks={tasks} />
    </>
  );
}

export default Main;
