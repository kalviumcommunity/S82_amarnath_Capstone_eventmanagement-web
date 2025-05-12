const router = require("express").Router();
const { verifyToken } = require("../middlewares/authMiddleware");
const { getProfile } = require("../controllers/userController");

router.get("/me", verifyToken, getProfile);

module.exports = router;
