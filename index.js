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

//Sorting an array using the sort method
function Sort() {
    const array = [3, 2, 1, 13, 8, 5, 0, 1] 
     const secondArray = array.sort((a,b)=>{
        return a-b
     })

    console.log(secondArray)
};

            //*sorting the same array using the mergesort method*/
function mergeSort() {
    const array = [3, 2, 1, 13, 8, 5, 0, 1] 
   // Divide array by half and sort them each and sort them
    const arrayLength = array.length/2; //finding the centre of the array
    const leftArr = array.splice(0, arrayLength);
    const divide = array.length/2 ; // Divide the smaleer arrays by half
    const leftLeftArr = leftArr.splice(0, divide).sort(); //Get the left arr of the left part
    // Sort right part of the original array
    const rightArr = array.sort()
    const rightLeftArr = rightArr.splice(0, divide); //Get the left arr of the right part

    //Merge Left & Right Parts of the original Array
    const finalArray = []
    const mergedLeftArray = []
    const mergedRightArray = []

    function sort(arrayA, arrayB, arrayC){
    
        if (arrayA == '' && arrayB == '' ){
            console.log('Finished merging')
        } else if (arrayA[0] < arrayB[0] ){
            const a =  arrayA.splice(0,1)
            let b = Number(a)
            arrayC.push(b)   
            sort(arrayA, arrayB, arrayC)
        } else { 
            let a = arrayB.splice(0,1)
            let b = Number(a)
            arrayC.push(b)    
            sort(arrayA, arrayB, arrayC)
        }
    };

    function mergeLeftPart(){
        const mergeLeftPart = sort(leftLeftArr, leftArr, mergedLeftArray)
        console.log(mergedLeftArray)
    }; mergeLeftPart()

    function mergeRightPart() {
        const mergeRightPart = sort(rightLeftArr, rightArr, mergedRightArray)
        console.log(mergedRightArray)
    }; mergeRightPart()

    function mergeFinalArray(){
        const mergeFinalArray = sort(mergedRightArray, mergedLeftArray, finalArray)
        console.log(finalArray)
    }; mergeFinalArray()

};
mergeSort()