function insertion_Sort(arr)
{
  for (var i = 1; i < arr.length; i++) 
  {
    if (arr[i] < arr[0]) 
    {
      arr.unshift(arr.splice(i,1)[0]);
    } 
    else if (arr[i] > arr[i-1]) 
    {
      continue;
    } 
    else {
      for (var j = 1; j < i; j++) {
        if (arr[i] > arr[j-1] && arr[i] < arr[j]) 
        {
          //move element
          arr.splice(j,0,arr.splice(i,1)[0]);
        }
      }
    }
  }
  return arr;
}

console.log(insertion_Sort([3, 0, 2, 5, 8, 4, 1]));