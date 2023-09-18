const express = require('express')

// controller functions
const { loginUser, signupUser, logoutUser } = require('../controllers/userController')
const { refreshToken } = require('../controllers/refreshTokenController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

router.get('/logout', logoutUser)

router.get('/refresh', refreshToken)

module.exports = router