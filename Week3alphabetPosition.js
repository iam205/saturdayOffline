var userInput = prompt("Enter a String:");

var alphabetPosition = function(str) {
	a = "a";
	A = "A";
	aAscii = a.charCodeAt(0); // 97
	AAscii = A.charCodeAt(0); //65
	lowercase = [];
	uppercase = [];
	for(i=0; i<26; i += 1){
		lowercase[i] = String.fromCharCode(97+i);
		uppercase[i] = String.fromCharCode(65+i);
	}
	// generating a-z, A-Z

	splitStr = userInput.split("");
	var result = "";
	for(i=0; i<splitStr.length; i += 1){
		for(j=0; j<26; j += 1){
			if(splitStr[i] === lowercase[j] || splitStr[i] === uppercase[j]){
					result = result + (j+1) + " ";	
			}
			else{
				result = result;
			}
		}
	}

	return result;

}

console.log(alphabetPosition(userInput));