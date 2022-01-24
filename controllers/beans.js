const Bean = require('../models/bean');

module.exports = {
    show,
    new: newBeans,
};

function newBeans(req, res) {
    res.render('beans/new', { title: 'Add Beans' });
}
function show(req, res) {
    res.render('beans/show', { title: 'View My Coffee Tastings'});
}
