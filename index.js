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

    const rightArr = array.sort()
    const rightLeftArr = rightArr.splice(0, divide); //Get the left arr of the right part

    //Merge Arrays
    const finalArray = []
    const mergedLeftArray = []
    const mergedRightArray = []

    function sort(arrayA, arrayB, arrayC){
    
        if (arrayA == '' && arrayB == '' ){
            console.log('Finished merging')
            console.log(arrayC)
            
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

    function f(){
        const mergeLeftPart = sort(leftLeftArr, leftArr, mergedLeftArray)
        return console.log(mergedLeftArray)
    } 
    f()

    function g() {
        const mergeRightPart = sort(rightLeftArr, rightArr, mergedRightArray)
        console.log(mergedRightArray)
    }
    g()

    function h(){
        const mergeFinalArray = sort(mergedRightArray, mergedLeftArray, finalArray)
        console.log(finalArray)
    }
    h()







    // function me(){
    
    //     if (leftLeftArr == '' && leftArr == '' ){
    //         console.log('Finished merging left part')
    //         console.log(mergedLeftArray)
            
    //     } else if (leftLeftArr[0] < leftArr[0] ){
    //         const a =  leftLeftArr.splice(0,1)
    //         let b = Number(a)
    //         mergedLeftArray.push(b)   
    //         mergeLeftPart()
    //     } else { 
    //         let a = leftArr.splice(0,1)
    //         let b = Number(a)
    //         mergedLeftArray.push(b)    
    //         mergeLeftPart()
    //     }
    // };
    // mergeLeftPart()

    // function mergeRightPart(){
    
    //     if (rightLeftArr == '' && rightArr == '' ){
    //         console.log('Finished merging right part')
    //         console.log(mergedRightArray)
            
    //     } else if (rightLeftArr[0] < rightArr[0] ){
    //         const a =  rightLeftArr.splice(0,1)
    //         let b = Number(a)
    //         mergedRightArray.push(b)   
    //         mergeRightPart()
    //     } else { 
    //         let a = rightArr.splice(0,1)
    //         let b = Number(a)
    //         mergedRightArray.push(b)    
    //         mergeRightPart()
    //     }
    // };
    // mergeRightPart()

    // function mergeFinalArray(){
    
    //     if (mergedRightArray == '' && mergedLeftArray == '' ){
    //         console.log('Finished merging original array')
    //         console.log(finalArray)
            
    //     } else if (mergedRightArray[0] < mergedLeftArray[0] ){
    //         const a =  mergedRightArray.splice(0,1)
    //         let b = Number(a)
    //         finalArray.push(b)   
    //         mergeFinalArray()
    //     } else { 
    //         let a = mergedLeftArray.splice(0,1)
    //         let b = Number(a)
    //         finalArray.push(b)    
    //         mergeFinalArray()
    //     }
    // };
    // mergeFinalArray()

}
mergeSort()


// let arrayA = [1,4,5]
// let arrayB = [2,3,6]
// let arrayC = []
// let arrayD = [7,9,11]
// let arrayE = [8,10,12]



// // sort()

// console.log()


// function sort2(){
//     if (arrayD == '' && arrayE == '' ){
//         console.log('Finished merging too')
//         console.log(arrayC)
//     } else if (arrayD[0] < arrayE[0] ){
//         const a =  arrayD.splice(0,1)
//         let b = Number(a)
//         arrayC.push(b)   
//         sort2()
//     } else { 
//         let a = arrayE.splice(0,1)
//         let b = Number(a)
//         arrayC.push(b)    
//         sort2()
//     }

// };

