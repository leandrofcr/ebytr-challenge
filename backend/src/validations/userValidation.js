const Joi = require('joi');

const { checkExistence } = require('../model/usersModel');

const userDataEntries = (userData) => {
  const { error } = Joi.object({
    name: Joi.string().min(3).not().empty().required(),
    email: Joi.string().email().not().empty().required(),
    password: Joi.string().min(6).not().empty().required()
  }).validate(userData);

  if (error) {
    return { message: error.details[0].message };
  }
  return {};
};

const emailRegistered = async (email) => {
  const alreadyRegistered = await checkExistence(email);
  if (alreadyRegistered)
    return { emailConflict: true, message: 'Email already registered' };
  return {};
};

module.exports = {
  userDataEntries,
  emailRegistered
};
