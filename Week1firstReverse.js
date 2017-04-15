var userInput = prompt("Enter a String:");

function firstReverse(str) { 

  charArray = str.split("");
  reverseArray = [];
  for(i=0; i<charArray.length; i++){
    reverseArray[i] = charArray[charArray.length-i-1];
  }
  joinedString = reverseArray.join("");
  return joinedString;
}

console.log(firstReverse(userInput));