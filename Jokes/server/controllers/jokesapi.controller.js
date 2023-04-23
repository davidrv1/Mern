const Joke = require('../models/jokesapi.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()//query
        .then((allJokes) => {
            res.json({ jokes: allJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)//create is a query
        .then(newJoke => {
            res.json({ joker: newJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne(//query
        { _id: req.params.id })
        .then(oneJoke => {
            res.json({ joke: oneJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(//query
        { _id: req.params.id },
        req.body,//this is bc we created the joke in the body so when we want to update it we will also find it and edit in the body.
        { new: true, runValidators: true } //if we did not have this line here, the edit would not occur. 
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne(//query
        { _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

//once you complete here move onto routes.