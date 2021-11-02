const usersModel = require('../model/usersModel');

const {
  userDataEntries,
  emailRegistered
} = require('../validations/userValidation');

const createUser = async (name, email, password) => {
  const entries = userDataEntries({ name, email, password });
  if (entries.message) return entries;

  const alreadyRegistered = await emailRegistered(email);
  if (alreadyRegistered.message) return alreadyRegistered;

  return usersModel.createUser(name, email, password);
};

module.exports = {
  createUser
};
