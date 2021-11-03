const Joi = require('joi');

const checkTaskEntries = (task, status) => {
  const { error } = Joi.object({
    task: Joi.string().min(3).not().empty().required(),
    status: Joi.string().not().empty().required()
  }).validate({ task, status });

  if (error) {
    return { message: error.details[0].message };
  }
  return {};
};

module.exports = {
  checkTaskEntries
};
