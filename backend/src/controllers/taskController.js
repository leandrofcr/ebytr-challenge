const { CREATED, INTERNAL_SERVER_ERROR } = require('http-status');

const createTask = async (req, res) => {
  try {
    return res.status(CREATED).json();
  } catch (error) {
    console.log(error.message);
    return res.status(INTERNAL_SERVER_ERROR).send('Something went wrong :(');
  }
};

module.exports = {
  createTask
};
