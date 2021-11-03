require('dotenv').config();
const jwt = require('jsonwebtoken');
const { UNAUTHORIZED, OK, INTERNAL_SERVER_ERROR } = require('http-status');

const loginService = require('../services/loginService');

const secret = process.env.SECRET || 'notSoSecret';
const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256'
};

const checkLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await loginService.checkLogin(email, password);
    if (result.message) return res.status(UNAUTHORIZED).json(result);

    const { _id: userId } = result;
    const payload = { userId };

    const token = jwt.sign(payload, secret, jwtConfig);

    return res.status(OK).json({ token });
  } catch (error) {
    console.log(error.message);
    return res.status(INTERNAL_SERVER_ERROR).send('Something went wrong :(');
  }
};

module.exports = {
  checkLogin
};
