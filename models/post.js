const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // referencing a model
    photoUrl: String,
    caption: String,
    boardGames: {type: Number,}, 
    computerGames: {type: Number,},
    cooking: {type: Number,},
    discussion: {type: Number,},
    outdoors: {type: Number,},
    restaurants: {type: Number,},
    sports: {type: Number,},
    trivia: {type: Number,},
    TTRPG: {type: Number,},
  })
 

module.exports = mongoose.model('Post', postSchema);