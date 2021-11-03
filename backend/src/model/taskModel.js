const { getConnection } = require('./connection');

const createTask = async ({ task, status, userId, createdAt }) => {
  const db = await getConnection();
  const { insertedId } = await db
    .collection('tasks')
    .insertOne({ task, status, userId, createdAt });

  return { id: insertedId, task, status, createTask, userId };
};

module.exports = {
  createTask
};
