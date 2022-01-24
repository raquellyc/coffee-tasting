const Bean = require('../models/bean');

module.exports = {
    new: newBeans
};

function newBeans(req, res) {
    res.render('beans/new', { title: 'Add Beans' });
}

