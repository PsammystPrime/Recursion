function fibs(num){
    
    let previousNum = 0, nextNum = 1, sum = 0;
    
    for (let index = 0; index < num; index++) {

      sum = previousNum + nextNum;
      nextNum = previousNum;
      previousNum = sum;

        console.log(nextNum)
        
    }console.log('hoo')
};
fibs(5);

let previousNum = 0, nextNum = 1, sum = 0, index = 0;  
function fibsRec(num) {
    
    if (index >= num){
        console.log('haa')
  
    } else{
      console.log(previousNum);

        sum = previousNum + nextNum;
        previousNum = nextNum;
        nextNum = sum;
        index++;
        fibsRec(num);        
    }

};
fibsRec(5)

