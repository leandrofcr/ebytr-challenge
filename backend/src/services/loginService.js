const {
  checkLoginEntries,
  verifyLoginData
} = require('../validations/loginValidation');

const checkLogin = async (email, password) => {
  const loginEntries = checkLoginEntries({ email, password });
  if (loginEntries.message) return { message: loginEntries.message };

  const user = await verifyLoginData(email, password);
  if (user.message) return { message: user.message };

  return user;
};
module.exports = {
  checkLogin
};
