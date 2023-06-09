const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
    albumName: {
        type: String,
        required:[true, 'Album Name is required'],
        minLength: [3, 'Album Name must be three or more characters'],
        maxLenfth:[50, 'Album Name is too long']
    },
    artist:{
        type: String,
        required:[true, 'Artist name is required'],
        minLength: [3, 'Artist name must be three or more characters'],
        maxLength:[50, 'Artist name is too long']
    },
    releaseYear: {
        type: Number,
        min:[1920, 'No albums before 1920 allowed']
    },
    genre:{
        type: String, 
        required:[true, 'Genre is required'],
        minLength:[3, 'The genre must be 3 or more characters'],
        maxLength:[50, 'The genre is too long']
    },
    explicit:{
        type: Boolean,
        require:[true, 'You must fill this out']
    }
}, {timestamps:true});

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;