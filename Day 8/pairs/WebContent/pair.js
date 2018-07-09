arr = [1,5,6,-3,-10,10];
var k = 0;
var y = 0;
for(var i = 0; i<arr.length-1; i++)
{
    for(var j = i+1; j == i+1; j++)
    {
       k = arr[i]*arr[j];
       if(y == 0 || y>k )
        y =  k;
      if(k>y)
        console.log(arr[i],arr[j]);        
    } 
}