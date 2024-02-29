const passport = require('passport');

const LocalStrategy = require("./strategies/local.strategy");
const JwtStrategy = require('./strategies/jwtStrategy');

passport.use('local', LocalStrategy);
passport.use('jwt', JwtStrategy);
