const express = require("express"); //require equals import
const app = express();
const port = 8000;

//! List of instructions
app.get("/api", (req, res) => {
    res.json({message: "mid"});
});

app.post("/api/postData", (request, response) => {
    console.log(request.body);
    response.json({message: request.body})
})

//! this need to be below the other code blocks
console.log("Hi");
console.log("Check?");
app.listen(port, () => console.log(`Listening on port:${port}`));