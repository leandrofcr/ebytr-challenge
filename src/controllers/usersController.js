const { CREATED, INTERNAL_SERVER_ERROR, BAD_REQUEST } = require('http-status');

const usersService = require('../services/usersServices');

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const result = await usersService.createUser(name, email, password);

    if (result.message) return res.status(BAD_REQUEST).json(result);

    return res.status(CREATED).json(result);
  } catch (error) {
    console.log(error.message);
    return res.status(INTERNAL_SERVER_ERROR).send('Something went wrong :(');
  }
};

module.exports = {
  createUser
};
