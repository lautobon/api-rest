'use strict'

const express = require('express')
const auth = require('../middlewares/auth')
const { signIn, signUp } = require('../controllers/user')
const router = express.Router()


router.get('/private', auth, (req, res) => {
    res.status(200).send({ message: 'Tienes acceso' })
})


router.post('/login', signIn);
router.post('/register', signUp)

module.exports = router