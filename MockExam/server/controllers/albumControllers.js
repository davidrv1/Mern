const Album = require('../models/albumModels.js');

module.exports = {
    findAllAlbums: (req,res) => {
    Album.find()
        .then((allAlbums) => {
            res.status(200).json(allAlbums)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    },
    createAlbum: (req, res) => {
        Album.create(req.body) 
            .then((newAlbum) => {
                res.status(200).json(newAlbum)
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    },
    findOneAlbum: (req,res) => {
        Album.findOne({_id:req.params.id})
            .then((oneAlbum) => {
                res.status(200).json(oneAlbum)
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    },
    updateAlbum: (req,res) => {
        Album.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true })
            .then((updatedAlbum) => {
                res.status(200).json(updatedAlbum)
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    },
    deleteAlbum: (req, res) => {
        Album.deleteOne({ _id: req.params.id })
            .then(result => {
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    }
}
// module.exports.findAllAlbums = (req, res) => {
//     Album.find()
//         .then((allAlbums) => {
//             res.json({ albums: allAlbums }) // if i had just put all shows then on app.js line 12 i couldve left it at data n not include the .shows we have .shows there bc we put the key "shows:" there on this line.
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });
// }

// module.exports.createAlbum = (req, res) => {
//     Album.create(req.body)
//         .then(newAlbum => {
//             res.json({ album: newAlbum })
//         })
//         .catch((err) => {
//             res.status(400).json(err)// instead of just err, we couldve also put  {message: 'Something went wrong', error: err }
//         });}

// module.exports.findOneShow = (req, res) => {
//     Show.findOne({ _id: req.params.id })
//         .then((oneShow) => {
//             res.json({ show: oneShow })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });}

// module.exports.updateShow = (req, res) => {
//     Show.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updatedShow => {
//             res.json({ show: updatedShow })
//         })
//         .catch((err) => {
//             res.status(400).json(err)
//         });
//     }

// module.exports.deleteShow = (req, res) => {
//     Show.deleteOne({ _id: req.params.id })
//         .then(result => {
//             res.json({ result: result })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });}