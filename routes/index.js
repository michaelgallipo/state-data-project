const express = require('express');
const router = express.Router();
// const stateData = require('../formatData.js');

// var parsedData = stateData.allStateData ?
//   stateData.allStateData : "no Data Available";

const title = 
'<h1 style="text-align: center">State Data Project</h1>' +
'<a href="http://localhost:3000/states">All State Data</a>'


router.get('/', (req, res) => {
  res.send(title);
  // res.send(parsedData._rejectionHandler0);
});

module.exports = router;