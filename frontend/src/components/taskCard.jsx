import React from 'react';
import PropTypes from 'prop-types';

function TaskCard({ tasks }) {
  return (
    <>
      {tasks.map((el, idx) => {
        return (
          <div key={idx}>
            <p>{el.task}</p>
            <span>{`${el.createdAt} - ${el.userId}`}</span>
          </div>
        );
      })}
    </>
  );
}

TaskCard.propTypes = {
  tasks: PropTypes.array
};

export default TaskCard;
