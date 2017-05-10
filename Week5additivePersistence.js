var userInput = prompt("Enter a string:");

var additivePersistence = function(str) {

    var numStr = Number(str);

    var addAllNum = function(num){
      var numArray = num.toString().split("");
      var subTotal = 0;
      for(i=0; i<numArray.length; i+=1){
        subTotal += numArray[i]*1;
      }
      return subTotal;
    }

    var interimAnswer = addAllNum(numStr);
    var count = 1;

    while(interimAnswer>=10){
      interimAnswer = addAllNum(interimAnswer);
      count++;
    }
    return count;
}

console.log(additivePersistence(userInput));
