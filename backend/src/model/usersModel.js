const { getConnection } = require('./connection');

const createUser = async (name, email, password) => {
  const db = await getConnection();
  const createdUser = await db
    .collection('users')
    .insertOne({ name, email, password });

  return {
    user: { _id: createdUser.insertedId, name, email }
  };
};

const checkExistence = async (email) => {
  const db = await getConnection();
  const wasFound = await db.collection('users').findOne({ email });
  return wasFound !== null;
};

module.exports = {
  createUser,
  checkExistence
};
