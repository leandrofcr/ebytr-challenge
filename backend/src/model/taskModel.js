const { ObjectId } = require('mongodb');

const { getConnection } = require('./connection');

const createTask = async ({ task, status, username, createdAt }) => {
  const db = await getConnection();
  const { insertedId } = await db
    .collection('tasks')
    .insertOne({ task, status, username, createdAt });

  return { id: insertedId, task, status, createTask, username };
};

const getAllTasks = async () => {
  const db = await getConnection();
  return db.collection('tasks').find().toArray();
};

const updateTask = async ({ task, status, username, taskId }) => {
  const db = await getConnection();
  const updatedTask = await db
    .collection('tasks')
    .findOneAndUpdate(
      { _id: ObjectId(taskId) },
      { $set: { task, status, username } },
      { returnDocument: 'after' }
    );

  return { ...updatedTask.value, username };
};

const removeTask = async (taskId) => {
  const db = await getConnection();
  const task = await db
    .collection('tasks')
    .findOneAndDelete({ _id: ObjectId(taskId) });

  return task.value;
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  removeTask
};
