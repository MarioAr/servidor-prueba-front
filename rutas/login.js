const router = require("express").Router({mergeParams: true});
const jwt = require("jsonwebtoken");
let secret = "clave-hiper-mega-tera-peta-secreta";

router.post("/", (req, res) => {
    let o = req.body.cliente;

    if ( !o ) {
        res.json({error: "No encontrado objeto cliente"});

        return;
    }

    o.ip = req.ip;

    const clientes = req.db.collection("clientes");

    clientes.find({user: o.user, pass: o.pass, ip: o.ip}, {pass: 0, ip:0}).toArray((err, data) => {
        if ( err ) {
            res.json({rta: err});
            return;
        }
        if ( data.length > 0 ) {
            //res.json({rta: data});

            try {
                let user = {...data[0]};
                delete user.pass;
                let token = jwt.sign(user, secret);

                res.json({token: token});
                return;
            } catch (error) {
                res.json({error: error});
            }


            return;
        }
        res.json({error: "Credenciales invalidas"});

    });
});

module.exports = router;
