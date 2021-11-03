const express = require('express');
const { usersRoute, loginRoute, taskRoute } = require('./routes');

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  response.send({ message: 'ok' });
});

app.use('/users', usersRoute);
app.use('/login', loginRoute);
app.use('/tasks', taskRoute);

module.exports = app;
