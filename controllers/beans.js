const Bean = require('../models/bean');

module.exports = {
    show,
    new: newBeans,
    create,
    index,
    delete: deleteBean
};

function index(req, res) {
    Bean.find({})
    .then(function (beans) {
      res.render('beans/index', { title: 'All Beans', beans });
    })
    .catch(function (err) {
      res.redirect('/beans');
    });
}

function newBeans(req, res) {
    res.render('beans/new', { title: 'Add Beans' });
}

function show(req, res) {
    Bean.findById(req.params.id)
    res.render('beans/show', { title: 'View My Coffee Tastings'});
}

function create(req, res) {
    const bean = new Bean(req.body);
    bean.save(function(err) {
        if (err) return res.redirect('/beans/new');
        res.redirect('/beans')
    });
}

function deleteBean(req, res) {
    Bean.findById(req.params.id)
    .then(function(bean) {
        if (!bean) return res.redirect('/beans');
        bean.beans.remove(req.params.id);
        return bean.save();
    })
    .then(function(bean) {
        res.redirect(`/beans/${bean._id}`);
      });
}

