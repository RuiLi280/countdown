module.exports.add = function(req, res) {
    const list = req.session.cdList ? req.session.cdList : [];
    list.push(req.body.item);
    req.session.cdList = list;
    res.send(list);
};

module.exports.remove = function(req, res) {
    const list = req.session.cdList ? req.session.cdList : [];
    const newList = list.filter((i) => i.title !== req.body.title);
    req.session.cdList = newList;
    res.send(newList);
};

module.exports.setDefault = function(req, res) {
    req.session.defaultCd = req.body.defaultCd;
    console.log(req.session.defaultCd);
    res.send(req.session.defaultCd);
};

module.exports.getData = function(req, res) {
    const sess = req.session;
    res.send({
        isLogin: false,
        username: '',
        email: '',
        defaultCd: sess.defaultCd ? sess.defaultCd : null,
        cdList: sess.cdList ? sess.cdList : [],
    });
};