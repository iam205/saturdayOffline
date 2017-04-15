var userInput = prompt("Enter a String:");

var longestWord = function(sen) { 
	var senArray = sen.split(" ");
	var longestWord = "";
	for(i=0; i<senArray.length; i++){
		if(senArray[i].length > longestWord.length){
			longestWord = senArray[i];
		}
	}

	return longestWord;
  // Your code here  
}

console.log(longestWord(userInput));