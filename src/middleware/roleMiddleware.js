module.exports = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ msg: "User not authenticated" });
    }

    console.log("USER ROLE:", req.user.role);
    console.log("ALLOWED:", roles);

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ msg: "Access denied" });
    }

    next();
  };
};