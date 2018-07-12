function BinaryConvert(number)
{
	var num="";{
		while(number>0){
			num=number%2+num;
		number=Math.floor(number/2);
		}
		return num;
	
}
}
console.log(BinaryConvert(14));