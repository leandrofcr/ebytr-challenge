const Joi = require('joi');

const loginModel = require('../models/loginModel');

const checkLoginEntries = (userData) => {
  const { error } = Joi.object({
    email: Joi.string().email().not().empty().required(),
    password: Joi.string().min(6).not().empty().required()
  }).validate(userData);

  if (error) {
    return { message: error.details[0].message };
  }
  return {};
};

const verifyLoginData = async (email, password) => {
  const response = await loginModel.checkLogin(email, password);
  if (response.loginError) return { message: 'Incorrect username or password' };
  return response;
};

module.exports = {
  checkLoginEntries,
  verifyLoginData
};
