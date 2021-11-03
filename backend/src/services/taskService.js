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

module.exports = {
  createTask,
  getAllTasks
};
