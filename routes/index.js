const express = require('express');
const router = express.Router();
const stateData = require('../formatData.js');

var parsedData = stateData.allStateData ?
  stateData.allStateData : "no Data Available";


router.get('/', (req, res) => {
  // res.send('It Works!');
  res.send(parsedData._rejectionHandler0);
});

module.exports = router;