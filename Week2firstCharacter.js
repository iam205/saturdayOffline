var userInput = prompt("Enter a String:");

var makeString = function(s) {
	var splitS = s.split(" ");
	var firstChar = [];
	for(i=0; i<splitS.length; i++){
		if(splitS[i] !== ""){
			firstChar.push(splitS[i][0]);
		}
	}

	joinFirstChar = "";
	for(j=0; j<firstChar.length; j++){
		joinFirstChar = joinFirstChar.concat(firstChar[j][0]); 
	}
	return joinFirstChar;
  // Your code here
}

console.log(makeString(userInput));
