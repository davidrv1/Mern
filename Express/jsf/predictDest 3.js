// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar) //Tesla
// console.log(otherRandomCar) //['Mercedes'] 
//if  it had ...otherRandomCar then it would've been all the rest.

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name); //error
console.log(otherName); //Elon. other name is like a placeholder in this case.

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);//12345
// console.log(hashedPassword);//i thought this would work but it did not.
// i believe the reason it did not is because password is not part of person.
//therefore randomly setting password:hashPassword properly, you still cannot make it equal to person
//because it must already be part of person.

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);//false because 2 is not 5?
console.log(first == third);//

//im not sure how the commas work

const lastTest = {
    key: "value",
    secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
  //Predict the output
console.log(key);//value because we identified it so we can console log it
console.log(secondKey); //[1,5,1,8,3,3] //it's identified and it's 
console.log(secondKey[0]);//1 //because it asks for secondKe{0] which is one
console.log(willThisWork);//5