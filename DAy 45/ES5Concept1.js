/* function driverlicense5(passedtest){
     if (passedtest){
         var fname='john';
         var yob='1990';
        
     }
     console.log(fname + ',born in' +yob + ',is now officially allowed to drive a car');
 }
 driverlicense5(true);
//ES6
function driverlicense6(passedtest){
    let fname;
    const yob='1990';
    if (passedtest){
         fname='john';
        
    }
    console.log(fname + ',born in' +yob + ',is now officially allowed to drive a car');
}
driverlicense6(true);