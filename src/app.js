const express = require('express');
const { usersRoute } = require('./routes');

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  response.send({ message: 'ok' });
});

app.use('/users', usersRoute);

module.exports = app;
