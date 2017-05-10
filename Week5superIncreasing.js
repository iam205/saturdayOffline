var userInput = prompt("Enter a string:");

var superIncreasing = function(str) {
  var arr = eval(str);
  var newArr = arr.slice();
  var subTotal = 0;
  var count = 0;
  while(count < arr.length-2){
    subTotal = newArr[0]+newArr[1];
    if(newArr[2] > subTotal){
      newArr.splice(0, 2, subTotal);
    }
    else{
      return false;
    }
    count++;
  }
  return true;// Your code here
}

console.log(superIncreasing(userInput));
