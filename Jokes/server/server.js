const express = require("express");
const app = express();
    
require("./config/mongoose.config"); //calling the mongoose config file and running the connect function.
    //when we require a file like in the above.. what we are doing is automaitcally run the file.
    //what the code on that file does is connects to our database.
app.use(express.json(), express.urlencoded({ extended: true }));
    
const JokesApiRoutes = require("./routes/jokesapi.routes");
JokesApiRoutes(app);//this line calls the functions within the routes file. the whole function gets returned and stored in variables name jokesapiroutes.
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));

//in terminal in server folder
//if you have not already 
//npm i express mongoose. this is not one package alon this is too except with no commas in between.
//we install express, and mongoose and  it can be done in one go. npm i express mongoose
//upon installing you will see package lock, package. json, and node_modules.
//create .gitinore to ignore node_modules.
//finally you can run your code using nodemon server.js