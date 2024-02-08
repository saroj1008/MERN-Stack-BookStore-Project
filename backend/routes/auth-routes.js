const authController = require('../controllers/auth-controllers');

const express = require('express');
const router = express.Router();

router.post("/signin", authController.signIn);
router.post("/signup", authController.signUp);

module.exports = router;

