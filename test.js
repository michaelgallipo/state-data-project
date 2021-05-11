const stateData = [
  {state: 'Alabama', pop: 3000000},
  {state: 'Alaska', pop: 1500000},
  {state: 'Arizona', pop: 5000000}
];

const abbreviations = [
  {state: 'Alabama', code: 'AL'},
  {state: 'Alaska', code: 'AK'},
  {state: 'Arizona', code: 'AZ'}
];

const test = () => {
  for (x=0; x<stateData.length; x++) {
    let currState = abbreviations.filter((state) => state.state == stateData[x].state);
    stateData[x] = {...stateData[x], stateCode: currState[0].code}
  }
  console.log(stateData);
}

// let newStateData = stateData.map(stateObj => {
//   console.log(stateObj)
//   let currState = abbreviations.filter((state) => state.state == stateObj.state);
//   console.log(currState);
//   ({...stateObj})
// })

setTimeout(test, 1000);
