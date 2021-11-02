const Joi = require('joi');

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

module.exports = {
  userDataEntries
};
