import React from 'react';
import PropTypes from 'prop-types';
import CardTaskStyled from '../styles/taskCardStyled';
import Card from './card';

function TaskCard({ tasks, updateTasks }) {
  return (
    <>
      {tasks.map((el, idx) => {
        return (
          <CardTaskStyled key={idx}>
            <Card data={el} updateTasks={updateTasks} />
          </CardTaskStyled>
        );
      })}
    </>
  );
}

TaskCard.propTypes = {
  tasks: PropTypes.array,
  updateTasks: PropTypes.func
};

export default TaskCard;
