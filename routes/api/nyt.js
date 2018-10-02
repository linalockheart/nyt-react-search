const nytController = require("../..controllers/nytController");

//Matches with "/api/nyt"
router
    .route("/")
    .get(nytController.findAll);

module.exports = router;