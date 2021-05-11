const express = require('express');
const routes = require('./routes/index');
const states = require('./routes/state.js');

const app = express();
app.use('/', routes);
app.use('/states', states);


module.exports = app;
