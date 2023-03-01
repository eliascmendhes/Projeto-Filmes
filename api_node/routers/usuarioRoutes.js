const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/usuarioController");

router.get("/usuarios", UsuarioController.index);
router.get("/usuarios/:id", UsuarioController.show);
router.post("/usuarios", UsuarioController.store);
router.put("/usuarios/:id", UsuarioController.update);
router.delete("/usuarios/:id", UsuarioController.destroy);

module.exports = router;
