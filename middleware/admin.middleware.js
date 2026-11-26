const User = require("../models/User");

async function requireAdmin(req, res, next) {
  if (!req.user?._id) {
    return res.status(401).json({ message: "Authentication required." });
  }

  try {
    const user = await User.findById(req.user._id).select("role");

    if (!user) {
      return res.status(401).json({ message: "Account no longer exists." });
    }

    if (user.role !== "admin") {
      return res.status(403).json({ message: "Admin access required." });
    }
  } catch (err) {
    return next(err);
  }

  return next();
}

module.exports = requireAdmin;