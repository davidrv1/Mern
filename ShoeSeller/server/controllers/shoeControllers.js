const Shoe = require('../models/ShoeModels.js');

module.exports = {
    findAllShoes: (req,res) => {
        Shoe.find()
        .then((allShoes) => {
            res.status(200).json(allShoes)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    },
    createShoe: (req, res) => {
        Shoe.create(req.body) 
            .then((newShoe) => {
                res.status(200).json(newShoe)
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    },
    findOneShoe: (req,res) => {
        Shoe.findOne({_id:req.params.id})
            .then((oneShoe) => {
                res.status(200).json(oneShoe)
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    },
    updateShoe: (req,res) => {
        Shoe.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true })
            .then((updatedShoe) => {
                res.status(200).json(updatedShoe)
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    },
    deleteShoe: (req, res) => {
        Shoe.deleteOne({ _id: req.params.id })
            .then(result => {
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    }
}