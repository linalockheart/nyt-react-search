const router = require("express").Router();
const nytController = require("../../controllers/nytController");

// Matches with "/api/nyt"
router
    .route("/")
    .post(nytController.findAll);

module.exports = router;