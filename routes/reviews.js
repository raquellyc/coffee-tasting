const express = require('express');
const router = express.Router();
// Require the yet to be created reviews controller
const reviewsCtrl = require('../controllers/reviews');

// Define the Route to create a review
// POST /movies/:id/reviews
router.post('/beans/:id/reviews', reviewsCtrl.create);
// DELETE /reviews/:id
router.delete('/reviews/:id', reviewsCtrl.delete);


module.exports = router;