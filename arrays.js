var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function accessElementInArray(a, b) { return a[b] };

function addElementToBeginningOfArray(a, b) { return [b, ...a] }

function destructivelyAddElementToBeginningOfArray(a, b) {
 a.unshift(b)
 return a
}

function addElementToEndOfArray(a, b) { return [...a, b] }

function destructivelyAddElementToEndOfArray(a, b) {
 a.push(b)
 return a
}

function destructivelyRemoveElementFromBeginningOfArray(a, b) {
  a.shift(b)
  return a
}

function removeElementFromBeginningOfArray(a) {
  return a.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(a, b) {
  a.pop(b)
  return a
}

function removeElementFromEndOfArray(a) {
  return a.length = (a.length - 1)
}
