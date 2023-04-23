const mongoose = require('mongoose');

const JokeApi = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "setup is required"],
        minlength: [6, "setup must be at least 6 characters long"],
        maxlength: [100, 'the setup is too long']
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [6, "Punchline must be at least 6 characters long"],
        maxlength: [100, 'the setup is too long']
    }
}, {timestamps:true});//automatically creates created at and updated at timestamps

const Joke = mongoose.model('Joke', JokeApi);

module.exports = Joke;

//once we complete the models go to controllers.