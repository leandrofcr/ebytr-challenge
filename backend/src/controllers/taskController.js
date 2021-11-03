const {
  CREATED,
  INTERNAL_SERVER_ERROR,
  BAD_REQUEST,
  OK,
  NO_CONTENT
} = require('http-status');

const taskService = require('../services/taskService');

const createTask = async (req, res) => {
  try {
    const { userId } = req;
    const { task, status } = req.body;

    const result = await taskService.createTask(userId, task, status);
    if (result.message) return res.status(BAD_REQUEST).json(result);

    return res.status(CREATED).json(result);
  } catch (error) {
    console.log(error.message);
    return res.status(INTERNAL_SERVER_ERROR).send('Something went wrong :(');
  }
};

const getAllTasks = async (_req, res) => {
  try {
    const tasks = await taskService.getAllTasks();

    return res.status(OK).json(tasks);
  } catch (err) {
    console.log(err.message);
    return res.status(INTERNAL_SERVER_ERROR).json('Something went wrong :(');
  }
};

const updateTask = async (req, res) => {
  try {
    const { userId } = req;
    const { task, status, taskId } = req.body;

    const result = await taskService.updateTask(userId, task, status, taskId);
    if (result.message) return res.status(BAD_REQUEST).json(result);

    return res.status(OK).json(result);
  } catch (error) {
    console.log(error.message);
    return res.status(INTERNAL_SERVER_ERROR).send('Something went wrong :(');
  }
};

const removeTask = async (req, res) => {
  try {
    const { taskId } = req.body;

    const result = await taskService.removeTask(taskId);
    if (result.message) return res.status(BAD_REQUEST).json(result);

    return res
      .status(NO_CONTENT)
      .json({ message: 'task removed successfully' });
  } catch (error) {
    console.log(error.message);
    return res.status(INTERNAL_SERVER_ERROR).send('Something went wrong :(');
  }
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  removeTask
};
