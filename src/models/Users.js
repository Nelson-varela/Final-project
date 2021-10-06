const { Schema, model} = require('mongoose')


const userSchema = new Schema(
    {
        name:{ type: String, required: true},
        idNumber: { type: String, required: true},
        email:{ type: String, required: true},
        password: { type: String, required: true },
        roll: {type: String, required: true},
        id: { type: String},
        loggedInAt: {
            type: Date,
            default: new Date(),
        }

    }, {
        timestamps: true
    }, );

module.exports = model('Users', userSchema);