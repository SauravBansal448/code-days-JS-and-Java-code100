var Num=[1,4,5,3,4,8,8,9,1,2,3];

function firstDuplicate(ar){
	var find={};
	
	for(var a = 0, aa = ar.length; a < aa ; a++){
		if(find[ar[a]])
			return find[ar[a]];
		
		find[Num[a]] =a
	}
}
console.log(firstDuplicate(Num));