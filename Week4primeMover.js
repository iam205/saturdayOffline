var userInput = prompt("Enter a num:");

var PrimeMover = function(num) {
	var Primecount = 0;
	var result = 0;
	var subCount = 0;
	if(num === 1){
		return 2;
	}
	else{
		Primecount = 1;
		for(i=3; i<10000; i+=1){
			subCount = 0;
			for(j=2; j<=i-1; j+=1){
				if(i%j === 0){
					subCount++
				}
			}
			if(subCount === 0){
				Primecount++;
				if(Number(num) === Primecount){
					result = i;
					break;
				}
			}
		}
	return result;
	}
  // Your code here
}

console.log(PrimeMover(userInput));
