//Call Backs / Higher Order Function BREAK DOWN

//function introduction
//PART 2 
//because const result4 (part1) passes an array and a function, 
//in this case the function below, we carry out the function.
const monipulateArray = (arr, instructions) => {
    //when monipulateArray is called in part 1, as said before,
    //it passes in array [2,4,6] which fulfills the arr, and 
    // it also passes in multiplyElementBy2, which fulfillls insturctions.
    let output = []
    //we let output equal to an empty array.
    for (let index = 0; index < arr.length; index++){
    //we say that starting from 0, for every index with the array
    //we output.push(instructions(arr[index])) which in other words means
    //we push(add) to the output(empty array) what results within the parenthesis
    //within the paranthesis is instructions(arr[index]) which, as said before,
    //instructions is replaced by multiplyElementBy2 which is a function.
    //arr[index] is a location/item in the array. 
    //the function says to mult that item by 2 and push it into the result
        output.push(instructions(arr[index]))
    }
    return output
    //PART 4
    //the array that we used was [2,4,6]
    //the array results in [4,8,12]
    //we return the output
}

//another function introduced.
//PART 3
//we take this function and carry it out with (arr[index]) from above
//resulting with [4,8,12]
const multiplyElementBy2 = (val) => {
    return val*2
}
//PART 1
//function monipulateArray is called and is given an array and
//"instructions" but in this case, what fills in the instructions space,
//is another functions
const result4 = monipulateArray([2,4,6], multiplyElementBy2)
console.log(result4);
//PART 5
//we console log  result4 which is the outcome being [4,8,12]