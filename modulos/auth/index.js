const router = require("express").Router({mergeParams: true});
const jwt = require("jsonwebtoken");

let secret = "clave-hiper-mega-tera-peta-secreta";

router.use((req, res, next) => {
    
    let token = req.headers.token;
    if ( !token ) {
        res.json({error: "Acceso prohibido"});
        return;
    } 
    try {
        let decoded = jwt.verify(token, secret)
        next();
    } catch (error) {
        res.json({error: "Acceso prohibido"});
    }
});

module.exports = router;