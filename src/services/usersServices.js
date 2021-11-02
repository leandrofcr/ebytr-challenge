const usersModel = require('../model/usersModel');

const { userDataEntries } = require('../validations/userValidation');

const createUser = async (name, email, password) => {
  const entries = userDataEntries({ name, email, password });
  if (entries.message) return entries;

  return usersModel.createUser(name, email, password);
};

module.exports = {
  createUser
};
