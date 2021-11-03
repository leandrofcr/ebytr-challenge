const { getConnection } = require('./connection');

const checkLogin = async (email, password) => {
  const db = await getConnection();
  const user = await db.collection('users').findOne({ email, password });

  return user;
};

module.exports = {
  checkLogin
};
