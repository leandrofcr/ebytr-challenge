const { checkTaskEntries } = require('../validations/taskValidation');

const createTask = async (userId, task, status) => {
  const taskEntries = checkTaskEntries(task, status);
  if (taskEntries.message) return taskEntries;

  return { userId, task, status };
};
module.exports = {
  createTask
};
