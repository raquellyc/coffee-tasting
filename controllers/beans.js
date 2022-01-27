const bean = require('../models/bean');
const Bean = require('../models/bean');

module.exports = {
    show,
    new: newBeans,
    create,
    index,
    edit
};

function index(req, res) {
    Bean.find({}, function(err, beans) {
      res.render('beans/index', { title: 'My Coffee', beans });
    })
}

function show(req, res) {
    Bean.findById(req.params.id)
    .exec(function (err, bean) {
        res.render('beans/show', { title: 'Bean Details', bean});
    });
}

function newBeans(req, res) {
    res.render('beans/new', { title: 'Add Coffee' });
}

function create(req, res) {
    req.body.user = req.user._id;
    const bean = new Bean(req.body);
    console.log('bean', bean)
    bean.save(function(err) {
        if (err) return res.render('beans/new');
        res.redirect('/beans')
    });
}

function edit(req, res) {
    Bean.findOneAndUpdate(
        {_id: req.params.id, userRecommending: req.user._id},
        req.body,
        {new: true},
        function(err, bean) {
          if (err || !bean) return res.redirect('beans/edit');
          res.redirect(`beans/${bean._id}`);
        }
      );
}




