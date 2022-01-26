const Bean = require('../models/bean');

module.exports = {
    show,
    new: newBeans,
    create,
    index,
};

function index(req, res) {
    Bean.find({}, function(err, beans) {
      res.render('beans/index', { title: 'My Coffee', beans });
    })
}

function show(req, res) {
    Bean.findById(req.params.id)
    .exec(function (err, bean) {
        res.render('beans/show', { title: 'Bean Detail', bean});
    });
}

function newBeans(req, res) {
    res.render('beans/new', { title: 'Add Beans' });
}

function create(req, res) {
    req.body.user = req.user._id;
    const bean = new Bean(req.body);
    bean.save(function(err) {
        if (err) return res.render('beans/new');
        res.redirect('/beans')
    });
}




