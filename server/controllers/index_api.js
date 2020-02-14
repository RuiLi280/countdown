module.exports.home = async function(req, res) {
    if (req.session.email) {
        const email = req.session.email;
        const db = req.db;
        const controller = db.get('user');
        const doc = await controller.findOne(email);
        if (doc !== null) {
            const data = {
                username: doc.username,
                email: doc.email,
                cdList: doc.list,
            };
            res.send(data);
        }
    }
};