const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');

const { verifyPassword } = require('./../passwordUtilities');

const UserService = require('./../../../services/user.service');
const userService = new UserService();

const LocalStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (username, password, done) => {
    try {
        const user = await userService.findByEmail(username)

        if (!user) {
            return done(boom.unauthorized('User not found'), false);
        }

        const isMatch = await verifyPassword(password, user.password);

        if (!isMatch) {
            return done(boom.unauthorized('User or password not valid'), false);
        }
        delete user.dataValues.password;
        done(null, user)

    } catch (error) {
        done(error, false);
    }
});

module.exports = LocalStrategy;