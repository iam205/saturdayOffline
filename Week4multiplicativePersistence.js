var userInput = prompt("Enter a num:");

var MultiplicativePersistence = function(num) {

	function multiplyDigit(num){

		var stringfyNum = num + "";
		var result = 1;
		for(var i=0; i<stringfyNum.length; i+=1){
			result *= (stringfyNum[i]*1)
		}
		return result;
	}

	var interimAnswer = multiplyDigit(num);
	var count =1;

	while(interimAnswer >= 10){
		var interimAnswer = multiplyDigit(interimAnswer);
		count++;
	}
	return count;
	console.log(interimAnswer);

  // Your code here
}

console.log(MultiplicativePersistence(userInput));