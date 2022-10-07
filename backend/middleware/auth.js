const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports = (req, res, next) => {
    console.log("coucou")
try {
    console.log(req.headers.authorization);

    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    const userId = decodedToken.userId;
    req.auth = {
        userId: userId
    };

    if (req.body.userId && req.body.userId !== userId) {
        throw "Invalid user ID";
    }
	next();
    } catch(error) {
        res.status(401).json({
        error: new Error("Invalid request!")
        });
    }
};