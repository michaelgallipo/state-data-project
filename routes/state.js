const express = require('express');
const router = express.Router();
const cors = require('cors');
const stateData = require('../formatData.js');

var rawData = stateData.allStateData ?
  stateData.allStateData : "no Data Available";

  router.get('/', cors(), (req, res) => {
    // res.send('It Works!');
    var mapData = {};
    rawData._rejectionHandler0.forEach(state => {
      mapData[state.stateCode] = {
        "state": state.state,
        "median_household_income": state.median_household_income,
        "share_unemployed_seasonal": state.share_unemployed_seasonal,
        "share_population_in_metro_areas": state.share_population_in_metro_areas,
        "share_population_with_high_school_degree": state.share_population_with_high_school_degree,
      }
    })
    res.send(mapData);
  });

  router.get('/:stateId', (req, res) => {
    // res.send(req.params);
    let allStates = rawData._rejectionHandler0
    let currState = allStates.filter(state => state.stateCode == req.params.stateId);
    res.send(currState);
  });


  
  module.exports = router;