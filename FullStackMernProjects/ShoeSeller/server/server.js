const express = require("express");
const app = express();
const cors = require('cors');//cors package
app.use(cors());//invoke it like a package
    
require("./config/mongoose.config");//calling mongoose config and running the connect function
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const ShoeRoutes = require("./routes/shoeRoutes");
ShoeRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));