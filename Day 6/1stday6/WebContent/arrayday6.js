var arr= [ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2] ;
var n =10;
function Subarrays()
{
    for (var i = 0; i < n; i++)
    {
        var sum = 0;
        for (var j = i; j < n; j++) 
        {
            
            sum = sum + arr[j];
            if (sum == 0) {
                     console.log(i+"to"+j);
                      
            
            }
        }
    }
}
Subarrays() ;