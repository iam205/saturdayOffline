var userInput = prompt("Enter a String:");

function ABCheck(str) { 

	for(i=0; i<str.length; i++){
		if(str[i] === "a" || str[i] === "A"){
			if(str[i+4] === "b" || str[i+4] === "B"){
				return true;
			}
		}
		else if(str[i] === "b" || str[i] === "B"){
			if(str[i+4] === "a" || str[i+4] === "A"){
				return true;
			}
		}
	}
	return false;
}

console.log(ABCheck(userInput));