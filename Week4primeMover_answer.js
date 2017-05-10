var userInput = prompt("Enter a num:");

var isPrime = function(n){
  for(var j=2; j<n; j+=1){
    if(n%j === 0){
      return false;
    }
  }
  return true;
}

var PrimeMover = function(num) {
  num = Number(num);
  var count = 0;
  var i=1;
  while(count !== num){
    i += 1;
    if(isPrime(i) === true){
      count += 1;
    }
  }
  return i;
  // Your code here
}

console.log(PrimeMover(userInput));
