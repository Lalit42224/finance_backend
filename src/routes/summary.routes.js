const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {
  getSummary,
  categorySummary,
  monthlySummary
} = require("../controllers/summaryController");

// Analyst + Admin
router.get("/summary", auth, role("analyst", "admin"), getSummary);

router.get("/category", auth, role("analyst", "admin"), categorySummary);

router.get("/monthly", auth, role("analyst", "admin"), monthlySummary);

module.exports = router;