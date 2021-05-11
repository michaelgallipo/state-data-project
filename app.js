const express = require('express');
const routes = require('./routes/index');
const CSVToJSON = require('csvtojson');
// const stateData = require('./formatData')

const app = express();
app.use('/', routes);

// CSVToJSON().fromFile('state_data.csv')
//     .then(stataData => {
//         console.log(stateData);
//     }).catch(err => {
//         // log error if any
//         console.log(err);
//     });

module.exports = app;
