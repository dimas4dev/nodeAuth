const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

async function verifyPassword(password, hash) {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch
}


async function hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash
}

function signToken(payload, secret, options = { expiresIn: '1h' }) {
    return jsonwebtoken.sign(payload, secret, options);
}

function verifyToken(token, secret) {
    return jsonwebtoken.verify(token, secret);
}


module.exports = { verifyPassword, hashPassword, signToken, verifyToken }