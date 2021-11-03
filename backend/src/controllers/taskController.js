const { CREATED, INTERNAL_SERVER_ERROR } = require('http-status');

const createTask = async (req, res) => {
  try {
    const { userId } = req;

    console.log(userId);

    return res.status(CREATED).json({ message: 'login ok' });
  } catch (error) {
    console.log(error.message);
    return res.status(INTERNAL_SERVER_ERROR).send('Something went wrong :(');
  }
};

module.exports = {
  createTask
};
