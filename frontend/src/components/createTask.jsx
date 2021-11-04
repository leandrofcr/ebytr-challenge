import React, { useState } from 'react';
import axios from 'axios';

import CreateTaskWrapper from '../styles/createTaskWrapper';

const ENDPOINT = 'http://localhost:3000/tasks';

function CreateTask() {
  const [task, setTask] = useState('');
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState('pendente');

  const handleSubmit = async () => {
    try {
      await axios.post(ENDPOINT, {
        username,
        task,
        status
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateTaskWrapper>
      <form>
        <label htmlFor="task">
          Tarefa
          <textarea
            type="text"
            id="task"
            onChange={({ target }) => setTask(target.value)}
          />
        </label>
        <label htmlFor="username">
          Responsável
          <input
            type="text"
            id="username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </label>
        <select
          name="status"
          id="status"
          onChange={({ target }) => setStatus(target.value)}
        >
          <option value="Pendente" defaultChecked>
            Pendente
          </option>
          <option value="Em Andamento">Em andamento</option>
          <option value="Finalizada">Finalizada</option>
        </select>

        <button type="button" onClick={() => handleSubmit()}>
          Adicionar
        </button>
      </form>
    </CreateTaskWrapper>
  );
}

export default CreateTask;
