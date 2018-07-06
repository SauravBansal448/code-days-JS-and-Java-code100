var readline = require('readline');
var r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var i = 0;
var j = i+1;
var recursiverandom = function () {
var arr = [10,20,34,11,3,4,9,22,4,2];
    
    var result1 = 0;
    var result2 = 0;
  	console.log(" user will give the answer")

  r.question("sum of "+arr[i]+" and "+arr[j]+ "\n" , function (answer1) {

    result1 = arr[i]+arr[j];
    if (answer1 == result1)
    {
       console.log("right");
       i = i+1;
       if(i>9)
        return r.close();
    }
    else
	{
	  console.log("please try again");
	}           
	//log('Got it! Your answer was: "', answer, '"');
    recursiverandom();
     
});
};

recursiverandom();