var o = new Object();
o.name = 'saurav';
o.lastName = 'bansal';
o.someFunction = function() {
   console.log(this.name);
}

// Better way
var o = {
   name: 'saurav ',
   lastName = 'bansal',
   someFunction : function() {
      console.log(this.name);
   }
};