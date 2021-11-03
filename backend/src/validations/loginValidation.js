const Joi = require('joi');

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

module.exports = {
  checkLoginEntries
};
