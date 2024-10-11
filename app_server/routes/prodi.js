var express = require('express');
var router = express.Router();

const prodiController  = require('../controllers/prodiControllers');

router.get("/", prodiController.prodi);

module.exports = router;