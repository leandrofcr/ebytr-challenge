import React, { useState } from 'react';

function CreateTask() {
  const [task, setTask] = useState('');
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState('pendente');

  const handleSubmit = () => {
    console.log(task, status, username);
  };

  return (
    <form>
      <label htmlFor="task">
        Tarefa:
        <input
          type="text"
          id="task"
          onChange={({ target }) => setTask(target.value)}
        />
      </label>
      <label htmlFor="username">
        Responsável pela tarefa:
        <input
          type="text"
          id="username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </label>
      <select name="status" id="status">
        <option
          value="Pendente"
          defaultChecked
          onChange={({ target }) => setStatus(target.value)}
        >
          Pendente
        </option>
        <option
          value="Em Andamento"
          onChange={({ target }) => setStatus(target.value)}
        >
          Em andamento
        </option>
        <option
          value="Finalizada"
          onChange={({ target }) => setStatus(target.value)}
        >
          Finalizada
        </option>
      </select>

      <button type="button" onClick={() => handleSubmit()}>
        Adicionar
      </button>
    </form>
  );
}

export default CreateTask;
