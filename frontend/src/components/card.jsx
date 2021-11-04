import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { AiOutlineDelete, AiOutlineEdit, AiOutlineSave } from 'react-icons/ai';

const TASK_ENDPOINT = 'http://localhost:3000/tasks';

function Card({ data, updateTasks }) {
  const [showEditInput, setShowEditInput] = useState(false);
  const [task, setTask] = useState(data.task);
  const [username, setUsername] = useState(data.username);
  const [status, setStatus] = useState('pendente');

  const handleUpdate = async (taskId) => {
    updateTasks({ taskId, task, username, status });
    try {
      await axios.put(TASK_ENDPOINT, {
        taskId,
        task,
        username,
        status
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (taskId) => {
    try {
      await axios.delete(TASK_ENDPOINT, { data: { taskId } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <button
          type="button"
          onClick={() => {
            handleRemove(data._id);
          }}
        >
          <AiOutlineDelete>Editar</AiOutlineDelete>
        </button>
        <button
          type="button"
          onClick={() => {
            setShowEditInput(!showEditInput);
            handleUpdate(data._id);
          }}
        >
          {showEditInput ? <AiOutlineSave /> : <AiOutlineEdit />}
        </button>
      </section>
      {!showEditInput && (
        <div>
          <span>{data.status}</span>
          <p>{data.task}</p>
          <code>{`${data.createdAt} - ${data.username}`}</code>
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
              defaultValue={data.username}
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
    </>
  );
}

Card.propTypes = {
  data: PropTypes.object,
  updateTasks: PropTypes.func
};

export default Card;
