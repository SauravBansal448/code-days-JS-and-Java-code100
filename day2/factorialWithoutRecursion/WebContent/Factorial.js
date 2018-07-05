
function show(){

var i, num, fact;
fact=1;
num=Number(document.getElementById("number").value);
for(i=1; i<=num; i++)  
{
fact= fact*i;
}  
document.getElementById("result").value= fact;
}
