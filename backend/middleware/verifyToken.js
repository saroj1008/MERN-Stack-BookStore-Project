const jwt = require("jsonwebtoken");
const PRIVATE_KEY = '98450';

function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).send({ success: false, message: 'No token provided.' });
    }

    // Check if the token format is correct
    const tokenParts = token.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        return res.status(401).send({ success: false, message: 'Invalid token format.' });
    }

    jwt.verify(tokenParts[1], PRIVATE_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send({ success: false, message: 'Failed to authenticate token.' });
        }

        req.decoded = decoded;
        next();
    });
}

module.exports = verifyToken;
