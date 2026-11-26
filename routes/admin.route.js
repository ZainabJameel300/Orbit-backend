const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const requireAdmin = require("../middleware/admin.middleware");

router.use(verifyToken, requireAdmin);

router.get("/example", (req, res) => {
  res.json({ message: "Welcome, admin." });
});

module.exports = router;