const router = require("express").Router({mergeParams: true});

router.get("/", (req, res) => {
    let ip = req.ip;

    const turnos = req.db.collection("turnos");

    turnos.find({ip: ip}).toArray( (err, data) => {
        if ( err ) {
            res.json({rta: err});
            return;
        }

        res.json({rta: data});
    });
});

router.post("/", (req, res) => {
    let o = req.body.turno;

    if ( !o ) {
        res.json({error: "No encontrado objeto turnos"});
        return;
    }

    o.ip = req.ip;

    const turnos = req.db.collection("turnos");

    turnos.insertOne(o, (err, data) => {
        if ( err ) {
            res.json({rta: err});
            return;
        }

        res.json({rta: data.result});
    })
});

module.exports = router;
