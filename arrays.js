var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candy = ["foo"];


function addElementToBeginningOfArray(chocolateBars, candy) {
  //So this makes the arry candy imput to go into choco without altering the orginal arra.
  return[candy,...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candy) {
  
  chocolateBars.unshift(candy);
  return;
}

function accessElementInArray (chocolateBars) {
  return chocolateBars[2];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift().slice(0);
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars = chocolateBars.slice(-1);
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}