const express = require ("express");
const router = express.Router()
const { register, login,   } = require("../controllers/adminController");



router.post("/registerad", register)
router.post("/login",  login)


module.exports = router