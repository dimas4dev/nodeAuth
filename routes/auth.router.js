const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jsonwebtoken = require('jsonwebtoken');

const { config } = require('../config/config');
const { verifyPassword, signToken } = require('../utils/auth/passwordUtilities');

const router = express.Router();

router.post('/login', passport.authenticate('local', { session: false }), async (req, res, next) => {
    try {
        const { user } = req;
        const payload = {
            sub: user.id,
            username: user.username,
            role: "bro"
        };
        const token = signToken(payload, config.authJwtSecret);
        res.status(200).json({ user, token });
    } catch (error) {
        next(boom.badImplementation(error))
    }
}
);


module.exports = router;
