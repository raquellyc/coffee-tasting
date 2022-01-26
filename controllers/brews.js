module.exports = {
    index
};

function index(req, res) {
    res.render('brews/index', { title: 'Brew Methods'});
}
