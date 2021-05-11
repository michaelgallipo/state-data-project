const CSVToJSON = require('csvtojson');

var allStateData = CSVToJSON().fromFile('state_data.csv')
    .then(stateData => {
        // console.log(stateData);
      return stateData
    }).catch(err => {
        // log error if any
        console.log(err);
    });
// const conversion = async() => {
// const allStateData = await CSVToJSON().fromFile('state_data.csv');
// return allStateData;
// }
//  console.log(allStateData);   

 var stateAbbrv = CSVToJSON().fromFile('abbreviations.csv')
  .then(abbreviations => {
    // console.log(abbreviations);
    return abbreviations;
  }).catch(err => {
    console.log(err);
  }); 

  reformatData = () => {
    // console.log(allStateData._rejectionHandler0.length);
    allStateData = allStateData._rejectionHandler0;
    stateAbbrv = stateAbbrv._rejectionHandler0;
    // console.log(allStateData.length);
    for (x=0; x<allStateData.length; x++) {
      let currState = stateAbbrv.filter(state => state.State == allStateData[x].state);
      // console.log(currState[0].State, currState[0].Code);
      allStateData[x] = {...allStateData[x], stateCode: currState[0].Code};
    };
    // console.log(allStateData);
  }

  setTimeout(reformatData, 1800);

  // module.exports = allStateData;   
  exports.allStateData = allStateData; 