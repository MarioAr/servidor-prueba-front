const router = require("express").Router({mergeParams: true});
const autos = require("./autos");
const clientes = require("./clientes");
const turnos = require("./turnos");
const login = require("./login");
const auth = require("../modulos/auth");

router.use("/login", login);
router.use("/clientes", clientes);

// Rutas autenticadas
router.use("/auto", [auth, autos]);
router.use("/turnos", [auth, turnos]);


module.exports = router;
