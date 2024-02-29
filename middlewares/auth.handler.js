const boom = require('@hapi/boom');
const { config } = require('./../config/config');

function checkApiKey(req, res, next) {
    const apiKey = req.headers['api']
    if (apiKey === config.apiKeyToken) {
        next();
    } else {
        next(boom.unauthorized());
    }
}

function checkAdminRole(req, res, next) {
    const { user } = req
    if (user === 'admin') {
        next();
    } else {
        next(boom.unauthorized());
    }
}

module.exports = { checkApiKey, checkAdminRole };