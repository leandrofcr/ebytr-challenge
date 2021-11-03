const { CREATED, INTERNAL_SERVER_ERROR, BAD_REQUEST } = require('http-status');

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

module.exports = {
  createTask
};