const { checkTaskEntries } = require('../validations/taskValidation');
const taskModel = require('../model/taskModel');

const createTask = async (userId, task, status) => {
  const taskEntries = checkTaskEntries(task, status);
  if (taskEntries.message) return taskEntries;

  const date = new Date();
  const createdAt = date.toLocaleString();

  const createdTask = await taskModel.createTask({
    task,
    status,
    userId,
    createdAt
  });

  return createdTask;
};

const getAllTasks = async () => taskModel.getAllTasks();

const updateTask = async (userId, task, status, taskId) => {
  const taskEntries = checkTaskEntries(task, status);
  if (taskEntries.message) return taskEntries;

  return taskModel.updateTask({ task, status, userId, taskId });
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
