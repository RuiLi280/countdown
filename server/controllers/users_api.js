// module.exports.home = async function(req, res) {
//     const email = req.session.email;
//     const db = req.db;
//     const controller = db.get('user');
//     try {
//         const doc = await controller.findOne(email);
//         if (doc !== null) {
//             const data = {
//                 username: doc.username,
//                 email: doc.email,
//                 defaultCd: doc.defaultCd,
//                 cdList: doc.list,
//             };
//             res.send(data);
//         }
//     } catch (e) {
//         console.error(e);
//         res.send("error");
//     }
// };


module.exports.setDefault = async function(req, res) {
    const col = req.db.get("user");
    try {
        const doc = await col.findOne({email: req.session.email});
        await col.update({email: req.session.email}, {$set: {defaultCd: req.body.defaultCd}});
        res.send({email: doc.email, defaultCd: req.body.defaultCd});
    } catch (e) {
        res.status(400);
        console.error(e);
        res.send("fail to set default");
    }
};

module.exports.add = async function(req, res) {
    const email = req.session.email;

    const col = req.db.get("user");
    try {
        const doc = await col.findOne({email: email});
        const list = [...doc.cdList, req.body.item];
        await col.update({email, email}, {$set: {cdList: list}});
        res.send(list);
    } catch(e) {
        console.error(e);
        res.status(400);
        res.send("fail to add");
    }
};

module.exports.remove = async function(req, res) {
    const email = req.session.email;
    const col = req.db.get("user");
    try {
        const doc = await col.findOne({email: email});
        const list = doc.cdList.filter(val => val.title !== req.body.title);
        await col.update({email: email}, {$set: {cdList: list}});
        res.send(list);
    } catch(e) {
        console.error(e);
        res.status(400);
        res.send("fail to remove");
    }
};

module.exports.getData = async function(req, res) {
    const email = req.session.email;
    const col = req.db.get("user");
    try {
        const doc = await col.findOne({email: email});
        res.send({
            isLogin: true,
            username: doc.username,
            email: doc.email,
            defaultCd: doc.defaultCd,
            cdList: doc.cdList,
        });
    } catch (e) {
        console.error(e);
        res.send("error");
    }
};