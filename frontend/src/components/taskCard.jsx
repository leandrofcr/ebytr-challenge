import React from 'react';
import PropTypes from 'prop-types';
import CardTaskStyled from '../styles/taskCardStyled';

function TaskCard({ tasks }) {
  return (
    <>
      {tasks.map((el, idx) => {
        return (
          <CardTaskStyled key={idx}>
            <span>{el.status}</span>
            <p>{el.task}</p>
            <code>{`${el.createdAt} - ${el.userId}`}</code>
          </CardTaskStyled>
        );
      })}
    </>
  );
}

TaskCard.propTypes = {
  tasks: PropTypes.array
};

export default TaskCard;
