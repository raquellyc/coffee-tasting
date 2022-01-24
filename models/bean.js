const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beanSchema = new Schema({
    coffeename: String,
    roaster: String,
    roast: String,
    roastdate: Date,
    brewdate: Date,
    price: Number,
    brewmethod: {
        type: String,
        enum: ['espresso', 'drip', 'pourover', 'press', 'coldbrew', 'cupping', 'aeropress', 'mokapot', 'vaccumpot', 'turkish', 'other']
    },
    beverage: String,
    review: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
});

module.exports = mongoose.model('Bean', beanSchema);