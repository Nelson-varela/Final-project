const { Schema, model } = require('mongoose');

const noveltySchema = new Schema({
    title: String,
    message: String,
    creator: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})


module.exports = model('Novelty', noveltySchema);