// push method
const arrayPush = [1, 2, 3, 4];
function push(element) {
  arrayPush[arrayPush.length] = element;
  return arrayPush.length;
}

console.log(push(4));
console.log(arrayPush);

// unshift method
function unshift(element) {
  for (let i = arrayPush.length; i > 0; i--) {
    arrayPush[i] = arrayPush[i - 1];
  }
  arrayPush[0] = element;

  return arrayPush.length;
}

console.log(unshift(7));
console.log(arr1);

// shift method;

function shift(array) {
  let firstElement = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length--;
  return firstElement;
}

// map method
function map(array, call) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(call(array[i]));
  }

  return newArr;
}

// reduce method
const nums = [2, 4, 5];

function reduce(call) {
  let accaumlator = nums[0];
  for (let i = 1; i < nums.length; i++) {
    accaumlator = call(accaumlator, nums[i]);
  }

  return accaumlator;
}

// filter method
let arr = [2, 3, 5, 6, 7];

function filter(call) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (call(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

// pop method
const arrayPop = [2, 3, 4, 5, 6, 7];

function pop(array) {
  let lastElement = array[array.length - 1];
  array.length--;
  return lastElement;
}

console.log(pop(arrayPop));