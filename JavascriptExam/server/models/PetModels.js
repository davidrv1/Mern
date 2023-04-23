const mongoose = require('mongoose'); 

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'Pet Name is required'],
        minLength: [3, 'Pet Name must be three or more characters'],
        maxLenfth:[50, 'Pet Name is too long']
    },
    type:{
        type: String,
        required:[true, 'Type is required'],
        minLength: [3, 'Type must be three or more characters'],
        maxLength:[50, 'Type is too long']
    },
    description:{
        type: String,
        required:[true, 'Description is required'],
        minLength: [3, 'Description must be three or more characters'],
        maxLength:[50, 'Description is too long']
    },
    skillOne:{
        type: String,
        minLength: [0, null],
        maxLength:[50, 'Skill is too long']
    },
    skillTwo:{
        type: String,
        minLength: [0, null],
        maxLength:[50, 'Skill is too long']
    },
    skillThree:{
        type: String,
        minLength: [0, null],
        maxLength:[50, 'Skill is too long']
    }
}, {timestamps:true});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;