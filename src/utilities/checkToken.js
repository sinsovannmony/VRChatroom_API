const jwt = require("jsonwebtoken");
function checkToken(req, res, next) {
  // Gather the jwt access token from the request header
  const token = req.body["authorization"];
  const mytoken = token.replace(/['"]+/g, '');
  if (mytoken == null) return res.sendStatus(401); // if there isn't any token
  jwt.verify(mytoken, process.env.SECRET , (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
module.exports = checkToken;