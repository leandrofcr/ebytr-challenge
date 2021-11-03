const express = require('express');
const { usersRoute, loginRoute } = require('./routes');

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  response.send({ message: 'ok' });
});

app.use('/users', usersRoute);
app.use('/login', loginRoute);

module.exports = app;
