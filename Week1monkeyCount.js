var userInput = prompt("Enter a array:");

function monkeyCount(n) {
  str = "[";
  for(i=0; i<n; i++){
    if(i != n-1){
    str += i+1 + ", ";
    }
    else{
    str += i+1;
    }
  }
  str += "]";
  return str;
  // code goes here           
}

console.log(monkeyCount(userInput));