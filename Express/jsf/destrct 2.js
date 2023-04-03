// const person = {
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     addresses: [
//     {
//         address: '1600 Pennsylvania Avenue',
//         city: 'Washington, D.C.',
//         zipcode: '20500',
//     },
//     {
//         address: '221B Baker St.',
//         city: 'London',
//         zipcode: 'WC2N 5DU',
//     }
//     ],
//     createdAt: 1543945177623

// };
// const { firstName, lastName, email, ...attributes } = person;
// const personCopy = { ...person };

// console.log(email);
// console.log(personCopy);
// console.log(firstName);
// console.log(lastName);

// --- 


// const person = { 
//     firstName: 'Bob', 
//     lastName: 'Marley', 
//     email: 'bob@marley.com', 
//     password: 'sekureP@ssw0rd9', 
//     username: 'barley', 
//     createdAt: 1543945177623
// };
// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// // AFTER ES6
// const { email, password } = person;
// const [firstAnimal, ...theOthers] = animals;
// console.log(email);
// // => bob@marley.com
// console.log(firstAnimal);
// // => horse
// console.log(password);
// // => password
// console.log(theOthers);
// // ['dog', 'fish', 'cat', 'bird']

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
    {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
    },
    {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
    }
    ],
    createdAt: 1543945177623
};

const { addresses: [whiteHouse, sherlock] } = person;

console.log(whiteHouse);
//{
//     address: '1600 Pennsylvania Avenue',
//     city: 'Washington, D.C.',
//     zipcode: '20500'
//   }

console.log(sherlock);
//
// { address: '221B Baker St.', city: 'London', zipcode: 'WC2N 5DU' }

console.log(person);
//{
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     addresses: [
//       {
//         address: '1600 Pennsylvania Avenue',
//         city: 'Washington, D.C.',
//         zipcode: '20500'
//       },
//       { address: '221B Baker St.', city: 'London', zipcode: 'WC2N 5DU' }
//     ],
//     createdAt: 1543945177623
//   }
const { addresses: [ , { city: london }] } = person;
console.log(london);
// => London

const { addresses: [ , { city: zoo }] } = person;
console.log(zoo);
// => London