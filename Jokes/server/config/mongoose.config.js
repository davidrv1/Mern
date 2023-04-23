const mongoose = require('mongoose'); 
//DO NOT FORGET TO INSTALL MONGOOSE!!!!
//what the above does is import mongoose package and we use that to connect to the data base.
//                                          only need to change name of db
mongoose.connect('mongodb://127.0.0.1:27017/jokesApiAssingment', { //once the name is changed nothing else is needed. move to models from here.
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));