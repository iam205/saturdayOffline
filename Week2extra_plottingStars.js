var userInput = prompt("Enter a number:");

function start(userInput) { 
	var n = Number(userInput);
	for(i=1; i<=n; i += 1){
		if(i === 1){
			lineForNthRow = "";
			for(k=1; k<=(2*n-1); k += 1){
				if(k !== n){
					lineForNthRow += " ";
				}
				else{
					lineForNthRow += "*";
				}
			}
		}
		if((i !== 1) && (i !== n)){
			lineForNthRow = "";
			for(k=1; k<=(2*n-1); k += 1){
				if(k === (n-i+1) || k === (n+i-1)){
					lineForNthRow += "*";
				}
				else{
					lineForNthRow += " ";
				}	
			}
		}
		if(i === n){
			lineForNthRow = "";
			for(k=1; k<=(2*n-1); k += 1){
				lineForNthRow += "*";
			}
		}
		console.log(lineForNthRow + "\n");
	}          
}

start(userInput);



// hint : make star by "console.log"

n=1, k=2*n-1=1

i=1 *

n=2 k=2*n-1=3

i=1 1*3
i=2 ***

n=3 k=2*n-1=5

i=1 12*45
i=2 1*3*5
i=3 *****

n=4 k=2*n-1=7

i=1 123*567
i=2 12*4*67
i=3 1*345*7
i=4 *******

