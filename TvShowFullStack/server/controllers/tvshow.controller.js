const Show = require('../models/tvshows.model');

module.exports.findAllShows = (req, res) => {
    Show.find()
        .then((allShows) => {
            res.json({ shows: allShows }) // if i had just put all shows then on app.js line 12 i couldve left it at data n not include the .shows we have .shows there bc we put the key "shows:" there on this line.
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createShow = (req, res) => {
    Show.create(req.body)
        .then(newShow => {
            res.json({ show: newShow })
        })
        .catch((err) => {
            res.status(400).json(err)// instead of just err, we couldve also put  {message: 'Something went wrong', error: err }
        });}

module.exports.findOneShow = (req, res) => {
    Show.findOne({ _id: req.params.id })
        .then((oneShow) => {
            res.json({ show: oneShow })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateShow = (req, res) => {
    Show.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedShow => {
            res.json({ show: updatedShow })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    }

module.exports.deleteShow = (req, res) => {
    Show.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}