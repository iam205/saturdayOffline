var userInput = prompt("Enter a string of number:");    // "-1 20 30 40 ... 50"

function findMinMax(userInput) { 
	splitStr = userInput.split(" ");
	var splitStrToNum = [];
	for(i=0; i<splitStr.length; i++){
		splitStrToNum[i] = splitStr[i]*1;
	}

	var min = splitStrToNum[0];
	var max = splitStrToNum[0];

	for(k=1; k<(splitStrToNum.length); k++){
		if(splitStrToNum[k] < min){
			min = splitStrToNum[k];
		}
		if(splitStrToNum[k] > max){
			max = splitStrToNum[k];
		}
	}

	return min + " " + max;
  // code goes here   
}

console.log(findMinMax(userInput));