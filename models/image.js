const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    profileImg: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('Userimage', imageSchema)