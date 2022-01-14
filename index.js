const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

//const reducer = (prevVal,curVal) => prevVal + curVal;

// const totalBatteries = batteryBatches.reduce(reducer)

const totalBatteries = batteryBatches.reduce((pv,cv)=>pv+cv )
