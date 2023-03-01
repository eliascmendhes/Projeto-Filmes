const express = require("express");
const router = express.Router();
const FilmeController = require("../controllers/FilmeController");

router.get("/filmes", FilmeController.index);
router.get("/filmes/:id", FilmeController.show);
router.post("/filmes", FilmeController.store);
router.put("/filmes/:id", FilmeController.update);
router.delete("/filmes/:id", FilmeController.destroy);

module.exports = router;
