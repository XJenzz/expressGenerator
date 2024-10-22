const express = require("express");
const router = express.Router();
const fakultasController = require("../controllers/fakultasController");

router.get("/", fakultasController.getAllFakultas);
router.post("/", fakultasController.createFakultas);
router.get("/:id", fakultasController.getFakultasById);
router.get("/:id", fakultasController.updateFakultas);
router.put("/:id", fakultasController.deleteFakultas);

module.exports = router;