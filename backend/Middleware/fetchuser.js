var jwt = require('jsonwebtoken');
const JWT_SECRET = "sanjuisagood$girl";

const fetchuser = (req, res, next) => {
    //Get the user from the jwt token and add the ID to req onject.
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({ error: "Please authenticate using a valid token." })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Please authenticate using a valid token." })
    }

}
module.exports = fetchuser;