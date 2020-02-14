module.exports.userLogin = function (req, res) {
    const db = req.db;
    const collection = db.get("user");
    const data = req.body;
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
                    res.send("success");
                }
            });
        } else {
            res.status(400);
            res.send("error");
        }
    });
};

module.exports.userSignUp = async function (req, res) {
    const db = req.db;
    const collection = db.get("user");
    const data = req.body;
    // console.log(req);
    const doc = await collection.findOne({email: data.email});
    if (doc === null) {
        const bcrypt = require("bcrypt");
        const hash = await bcrypt.hash(data.password, 10);
        const newUser = {
            username: data.username,
            password: hash,
            email: data.email,
            cdList: [],
        };
        collection.insert(newUser);
        req.session.email = newUser.email;
        res.status(201);
        res.send("created");
    } else {
        res.status(409);
        res.send("email already existed");
    }
};

module.exports.userLogout = function(req, res) {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.status(200);
        res.send("log out");
    })
};