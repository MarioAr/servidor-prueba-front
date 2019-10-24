const router = require("express").Router({mergeParams: true});

router.get("/", (req, res) => {
    let ip = req.ip;

    const auto = req.db.collection("autos");

    auto.find({ip: ip}).toArray( (err, data) => {
        if ( err ) {
            res.json({rta: err});
            return;
        }

        res.json({rta: data});
    });
});

router.post("/", (req, res) => {
    let o = req.body.auto;
    // console.log(req.body);
    if ( !o ) {
        res.json({error: "No encontrado objeto auto"});
        return;
    }

    o.ip = req.ip;

    const auto = req.db.collection("autos");

    auto.insertOne(o, (err, data) => {
        if ( err ) {
            res.json({rta: err});
            return;
        }

        res.json({rta: data.result});
    });
});

module.exports = router;
