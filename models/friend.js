const mongoose = require('mongoose');


const friendSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    photoUrl: String,
    computerGames: {type: Number,},
    cooking: {type: Number,},
    discussion: {type: Number,},
    outdoors: {type: Number,},
    restaurants: {type: Number,},
    sports: {type: Number,},
    trivia: {type: Number,},
    TTRPG: {type: Number,},

})

module.exports = mongoose.model('Friend', friendSchema);