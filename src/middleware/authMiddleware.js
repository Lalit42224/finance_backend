const jwt = require("jsonwebtoken");







module.exports = (req, res, next) => {
  try {
    const token = req.cookies.token;

    console.log("COOKIE TOKEN:", token);

    if (!token) {
      return res.status(401).json({ msg: "No token, access denied" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
     console.log("DECODED USER:", req.user);

    next();
  } catch (err) {
    console.log(err.message);
    res.status(401).json({ msg: "Invalid token" });
  }
};