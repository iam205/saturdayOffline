var userInput = prompt("Enter a string:");

var DashInsert = function(str) {
	splitStr = str.split("");
	for(var i=0; i<splitStr.length; i+=1){
		if(splitStr[i]%2 === 1 && splitStr[i+1]%2 === 1){
			splitStr.splice(i+1, 0, "-");
		}
	}
	str = splitStr.join("");
	return str;
  // Your code here
}


console.log(DashInsert(userInput));