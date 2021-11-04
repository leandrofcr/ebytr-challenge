import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Card({ data, updateTasks }) {
  const [showEditInput, setShowEditInput] = useState(false);
  const [task, setTask] = useState('');
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState('pendente');

  const handleUpdate = (target, taskId) => {
    if (target.textContent === 'Salvar') {
      updateTasks({ taskId, task, username, status });
    }
  };

  return (
    <>
      {!showEditInput && (
        <div>
          <span>{data.status}</span>
          <p>{data.task}</p>
          <code>{`${data.createdAt} - ${data.userId}`}</code>
        </div>
      )}

      {showEditInput && (
        <form>
          <textarea
            name="task"
            id="task"
            cols="30"
            rows="5"
            defaultValue={data.task}
            onChange={({ target }) => setTask(target.value)}
          />
          <label htmlFor="username">
            Responsável
            <input
              type="text"
              id="username"
              defaultValue={data.userId}
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
        </form>
      )}
      <button
        type="button"
        onClick={({ target }) => {
          setShowEditInput(!showEditInput);
          handleUpdate(target, data._id);
        }}
      >
        {showEditInput ? 'Salvar' : 'Editar'}
      </button>
    </>
  );
}

Card.propTypes = {
  data: PropTypes.object,
  updateTasks: PropTypes.func
};

export default Card;
