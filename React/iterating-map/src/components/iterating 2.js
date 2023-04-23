const nums = [1, 2, 3, 4, 5];
//array is created
const newNums = [];
//empty array is created.

//we say that starting at i equals 0, 
//and we want to then check if i is less then nums.length (5)
//for every time i is less than 5, add 1 to i. and then..
//push to newNums the number we get when we multiply nums at the
//location of i by 2.
for(let i = 0; i < nums.length; i++) {
    newNums.push( nums[i] * 2 );
}

console.log( newNums );
//we ask for newNums once all is complete.
//output:
//[ 2, 4, 6, 8, 10 ]