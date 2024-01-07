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

