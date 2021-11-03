const { checkLoginEntries } = require('../validations/loginValidation');

const loginModel = require('../model/loginModel');

const checkLogin = async (email, password) => {
  const loginEntries = checkLoginEntries({ email, password });
  if (loginEntries.message) return { message: loginEntries.message };

  const user = await loginModel.checkLogin(email, password);
  if (!user) return { message: 'Incorrect username or password' };

  return user;
};
module.exports = {
  checkLogin
};
