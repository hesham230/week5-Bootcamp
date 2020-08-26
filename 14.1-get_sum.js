function getSum(arr1, arr2){
  // sum cant be declared as const because we need to update it.
  //const sum = 0;
  let sum = 0;
  for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
  }
  for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
  }
  // we must return the sum 
  return sum;
}
// console.log(getSum([1,2,3][5,66,23]));
// we must add , between the two arrays when calling the functions
console.log(getSum([1,2,3],[5,66,23]));
