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

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift(b)
  return a
}

function removeElementFromBeginningOfArray(a, b) {
  a.slice(b, a.length-1)
  return a
}

function destructivelyRemoveElementFromEndOfArray(a, b) {
  a.pop(b)
  return a
}

function removeElementFromEndOfArray(a) {
  a = a.slice(0, a.length - 1)
  return a
}
