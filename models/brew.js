const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brewSchema = new Schema({
    method: String
})

module.exports = mongoose.model('Brew', brewSchema);
