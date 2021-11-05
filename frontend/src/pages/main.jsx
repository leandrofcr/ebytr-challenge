import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TaskCard from '../components/taskCard';
import CardWrapper from '../styles/cardWrapper';
import CreateTask from '../components/createTask';

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

  const updateTasks = ({ taskId, task, status, username }) => {
    const updatedTasks = tasks.map((el) => {
      if (el._id === taskId) {
        return { ...el, _id: taskId, task, status, username };
      }
      return el;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <h2>Tarefas</h2>
      <CardWrapper>
        <TaskCard tasks={tasks} updateTasks={updateTasks} />
      </CardWrapper>
      <CreateTask />
    </>
  );
}

export default Main;
