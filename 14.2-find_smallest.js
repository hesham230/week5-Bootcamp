function findSmallest(a, b, c){
  // if(a < b < c) // problem here
  if (a < b && a < c){ // fix the problem
    return a;
    // else if (a > c > b) // problem here!
  } else if (b < a && b < c) { // fix the problem
     return b;
  } else {
     return c;
  }
}
// findSmalest(52,66, 2); // problem here (the function name is wrong)
console.log(findSmallest(52,66,2)); // fix the problem