const { ObjectId } = require('mongodb');

const { getConnection } = require('./connection');

const createTask = async ({ task, status, userId, createdAt }) => {
  const db = await getConnection();
  const { insertedId } = await db
    .collection('tasks')
    .insertOne({ task, status, userId, createdAt });

  return { id: insertedId, task, status, createTask, userId };
};

const getAllTasks = async () => {
  const db = await getConnection();
  return db.collection('tasks').find().toArray();
};

const updateTask = async ({ task, status, userId, taskId }) => {
  const db = await getConnection();
  const updatedTask = await db
    .collection('tasks')
    .findOneAndUpdate(
      { _id: ObjectId(taskId) },
      { $set: { task, status, userId } },
      { returnDocument: 'after' }
    );

  console.log(updatedTask);
  return { ...updatedTask.value, userId };
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
