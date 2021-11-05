const { checkTaskEntries } = require('../validations/taskValidation');
const taskModel = require('../model/taskModel');

const createTask = async (username, task, status) => {
  const taskEntries = checkTaskEntries(username, task, status);
  if (taskEntries.message) return taskEntries;

  const date = new Date();
  const createdAt = date.toLocaleString();

  const createdTask = await taskModel.createTask({
    username,
    task,
    status,
    createdAt
  });

  return createdTask;
};

const getAllTasks = async () => taskModel.getAllTasks();

const updateTask = async (username, task, status, taskId) => {
  const taskEntries = checkTaskEntries(username, task, status);
  if (taskEntries.message) return taskEntries;

  return taskModel.updateTask({ task, status, username, taskId });
};

const removeTask = async (taskId) => {
  const task = await taskModel.removeTask(taskId);
  if (!task) return { message: 'task not found' };

  return {};
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  removeTask
};
