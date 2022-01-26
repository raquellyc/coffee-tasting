const Bean = require('../models/bean');

module.exports = {
  create,
  delete: deleteReview
};

function deleteReview(req, res) {
  Bean.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id})
  .then(function(bean) {
    if (!bean) return res.redirect('/beans');
    bean.reviews.remove(req.params.id);
    return bean.save();
  })
  .then(function(bean) {
    res.redirect(`/beans/${bean._id}`);
  });
}

function create(req, res) {
  Bean.findById(req.params.id, function(err, bean) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    bean.reviews.push(req.body);
    bean.save(function(err) {
      res.redirect(`/beans/${bean._id}`);
    });
  });
}