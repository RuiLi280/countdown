module.exports.userLogin = function (req, res) {
    if (req.session.email) {
        res.send("already login");
        return;
    }
    const db = req.db;
    const collection = db.get("user");
    const data = req.body;
    console.log(data);
    collection.findOne({email: data.email}).then((doc) => {
        if (doc === null) {
            res.status(400);
            res.send("user not exist");
        } else if (doc.email === data.email) {
            const bcrypt = require("bcrypt");
            const inPass = data.password;
            bcrypt.compare(inPass, doc.password).then((result) => {
                req.session.email = req.body.email;
                if (result) {
                    res.status(200);
                    res.send("login success");
                }
            }).catch(e => {
                console.error(e);
                res.status(400);
                res.send("incorrect input field");
            });
        } else {
            res.status(400);
            res.send("error");
        }
    }).catch(e => {
        console.error(e);
        res.send("error");
    })
};

module.exports.userSignUp = async function (req, res) {
    const db = req.db;
    const collection = db.get("user");
    const data = req.body;
    // console.log(req);
    try {
        const doc = await collection.findOne({email: data.email});
        if (doc === null) {
            const bcrypt = require("bcrypt");
            const hash = await bcrypt.hash(data.password, 10);
            const sess = req.session;
            const newUser = {
                username: data.username,
                password: hash,
                email: data.email,
                defaultCd: sess.defaultCd,
                cdList: sess.cdList ? sess.cdList : [],
            };
            await collection.insert(newUser);
            console.log(newUser);
            req.session.email = newUser.email;
            res.status(201);
            res.send("created");
        } else {
            res.status(409);
            res.send("email already existed");
        }
    } catch (e) {
        console.error(e);
        res.send("error");
    }
};

module.exports.userLogout = function(req, res) {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.send("log out");
    });
};