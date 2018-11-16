//reduce.js
function reduce(array, reducerFunction) {
  // Create an 'accumulator' that starts with the first value of the array.
  let accumulator = array[0];

  // Loop through the rest of the array, and call the reducer function on each element plus the accumulator
  for (let index = 1; index < array.length; index += 1){
    accumulator = reducerFunction(accumulator, array[index])
  }
  
  //After we're done, return the result.
  return accumulator;
}