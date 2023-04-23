const faker = require('@faker-js/faker');
const express = require("express");

const app = express();
const port = 8000;

const createUser = () => {
    const newFake = {
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    number: faker.phone.number(),
    email: faker.internet.exampleEmail(),
    password: faker.internet.password()
    };
    return newFake;
}

const createCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address:{
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.adress.state(),
        zipcode: faker.address.zipCode(),
        country: faker.address.country()
    }
});

app.get("/api/users/new", (req, res) => {
    const newUser = generateUserObj();
    res.json(newUser);
});

app.get("/api/companies/new", (req,res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get("/api/user/company",(req,res)=>{
    const newUser = createUser();
    const newCompany = createCompany();
    const responseObject = {
        user: newUser,
        company: newCompany
    };
    res.json(responseObject);
});

app.listen(port, () => console.log(`express server running on port ${port}`));

// const faker = require('@faker-js/faker');
// const express = require("express");

// const app = express();
// const port = 8000;

// const createUser = () => ({
//     _id: faker.datatype.uuid(),
//     firstName: faker.name.firstName(),
//     lastName: faker.name.lastName(),
//     email: faker.internet.password()
// });

// const createCompany = () => ({
//     _id: faker.datatype.uuid(),
//     name: faker.company.companyName(),
//     address:{
//         street: faker.address.streetAddress(),
//         city: faker.address.cityName(),
//         state: faker.adress.state(),
//         zipcode: faker.address.zipCode(),
//         country: faker.address.country()
//     }
// });

// app.get("/api/users/new", (req, res) => {
//     const newUser = generateUserObj();
//     res.json(newUser);
// });

// app.get("/api/companies/new", (req,res) => {
//     const newCompany = createCompany();
//     res.json(newCompany);
// });

// app.get("/api/user/company",(req,res)=>{
//     const newUser = createUser();
//     const newCompany = createCompany();
//     const responseObject = {
//         user: newUser,
//         company: newCompany
//     };
//     res.json(responseObject);
// });

// app.listen(port, () => console.log(`express server running on port ${port}`));
