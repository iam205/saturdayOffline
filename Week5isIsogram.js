var userInput = prompt("Enter a string:");

var islosgram = function(str) {
  var arr = str.toLowerCase().split("");
  for(var i=0; i<arr.length; i+=1){
    if(arr.indexOf(arr[i]) !== i){
      return false;
    }
  }
  return true;
  // Your code here
}

console.log(islosgram(userInput));
