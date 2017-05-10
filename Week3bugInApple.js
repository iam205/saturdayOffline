var userInput = prompt("Enter a 2-dimensional Array:");

var bugInApple = function(str) {
  var apple = eval(str);          // string str to array. Use apple variable!! (it's array type)
  for(i=0; i<apple.length; i += 1){
  	for(k=0; k<apple[i].length; k += 1){
  		if(apple[i][k] === "B" || apple[i][k] === "b"){
  			result = [];
  			result.push(i,k);
  			return result;
  		}
  	}
  }
// Your code here
}

console.log(bugInApple(userInput));