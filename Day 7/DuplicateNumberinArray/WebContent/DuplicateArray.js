function findduplicateinarray(arr) {
  var i,
  length=arr.length,
  res = [],
  object = {}; 
  for (i=0; i<length; i++)
  {
  object[arr[i]]=0;
  }
  for (i in object) {
  res.push(i);
  }
  return res;
  }
var ar = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
console.log(findduplicateinarray(ar));