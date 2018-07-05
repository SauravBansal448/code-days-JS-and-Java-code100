function factors(n)
{
 var num_factors = [], i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   num_factors.push(i);
   if (n / i !== i)
    num_factors.push(n / i);
  }
 num_factors.sort(function(x, y)
   {
     return x - y;});  
 return num_factors;
    }
console.log(factors(15));   
console.log(factors(16));   
console.log(factors(17));
console.log(factors(25));
console.log(factors(40));