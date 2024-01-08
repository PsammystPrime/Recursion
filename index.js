//Creating a fibonacci sequence using loop method
function fibs(num){  
    let previousNum = 0, nextNum = 1, sum = 0;
    
    for (let index = 0; index < num; index++) {
      sum = previousNum + nextNum;
      nextNum = previousNum;
      previousNum = sum;

      console.log(nextNum)        
    }
    console.log('finished looping')
};

//Creating the same fibonacci sequence using a recursive function
let previousNum = 0, nextNum = 1, sum = 0, index = 0;  
function fibsRec(num) {
    
    if (index >= num){
        console.log('finished recursing')
    } else{
        console.log(previousNum);
        sum = previousNum + nextNum;
        previousNum = nextNum;
        nextNum = sum;
        index++;

        fibsRec(num);        
    }
};

