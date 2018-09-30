const router = require("express").Router();
const articleRoutes = require("./articles");

// Book routes
router.use("/articles", articleRoutes);

// key route, make sure you put this in .env file!!
router.use("/key", (req, res) => {
    res.json({apiKey: process.env.NYT_API_KEY});
  });
///////////////////////////////////////////////////

module.exports = router;
