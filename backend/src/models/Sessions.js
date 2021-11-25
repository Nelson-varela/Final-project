const { Schema, model } = require('mongoose');

const sessionSchema = new Schema(
  {
    userId: String,
    name: String,
    loginDate: Date,
    logoutDate: Date || null
  }
);

module.exports = model('Sessions', sessionSchema);
