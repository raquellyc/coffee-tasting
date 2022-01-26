const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
    review: String,
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
});

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
    reviews: [reviewsSchema],
});

module.exports = mongoose.model('Bean', beanSchema);