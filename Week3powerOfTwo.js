var userInput = prompt("Enter a String:");

var powerOfTwo = function(str) {
	var num = Number(str);      // use num variable.
	if(num >=2){
		while(num%2 ===0){
			num = num/2;
		}
		if(num === 1){
			return true;
		}
		else{
			return false;
		}
	}
	else{
		return false;
	}
  // Your code here
}

console.log(powerOfTwo(userInput));