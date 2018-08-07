//"For in" Statements
for(key in object) {
   if(object.hasOwnProperty(key) {
      ...then do something...
   }
}

//Self-Executing Functions
//Rather than calling a function, it's quite simple to make a function run automatically when a page loads, 
//or a parent function is called. Simply wrap your function in parenthesis, and then append an additional set, 
//which essentially calls the function.
(function doSomething() {
   return {
      name: 'jeff',
      lastName: 'way'
   };
})();