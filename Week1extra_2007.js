var userInput = prompt("Enter a string:");    // "x y"  : 1 <= x <= 12, 1 <= y <= 31

function day(userInput) {
  var splitedUserInput = userInput.split(" ");
  var a = splitedUserInput[0]*1;
  var b = splitedUserInput[1]*1;
  var convertedDay = 0;

  for(i=1; i<a; i++){
    if (i === 1 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10 || i === 12){
      convertedDay += 31; 
    }
    else if (i === 4 || i === 6 || i === 9 || i === 11){
      convertedDay += 30
    }
    else if (i === 2){
      convertedDay += 28
    }
  }
  convertedDay += b;
  var remainder = convertedDay % 7;

  if(remainder === 1){
    return "MON";
  }
  if(remainder === 2){
    return "TUE";
  }
  if(remainder === 3){
    return "WED";
  }
  if(remainder === 4){
    return "THU";
  }
  if(remainder === 5){
    return "FRI";
  }
  if(remainder === 6){
    return "SAT";
  }
  if(remainder === 0){
    return "SUN";
  }
}
  // code goes here   

console.log(day(userInput));
