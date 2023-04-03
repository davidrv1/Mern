// we can hard code some users like this
// later on we will want to store users in a database
const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];
  
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users", (req, res) => {
  res.json( users );
});


// ---

// const express = require("express");
// const app = express();
// const port = 8000;

// // req is short for request
// // res is short for response
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello Gisselle, How Are You?" });
// });

// // this needs to be below the other code blocks
// app.listen( port, () => console.log(`Listening on port: ${port}`) );