const express = require('express');
const router = express.Router();
const stateData = require('../formatData.js');

var rawData = stateData.allStateData ?
  stateData.allStateData : "no Data Available";

  router.get('/', (req, res) => {
    // res.send('It Works!');
    res.send(rawData._rejectionHandler0);
  });

  router.get('/:stateId', (req, res) => {
    // res.send(req.params);
    let allStates = rawData._rejectionHandler0
    let currState = allStates.filter(state => state.stateCode == req.params.stateId);
    res.send(currState);
  });


  
  module.exports = router;