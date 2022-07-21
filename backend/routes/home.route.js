const express = require("express");
const router = express.Router();

/**
 * This route is used to redirect to the home route.
 */
router.get("/", (_, res) => {
    res.status(200).json({ message: "Welcome! to the app!" });
});

/**
 * This route is used to navigate to the shopping lists
 */
const shoppingListsRoute = require("./shopping-lists.route");
router.use("/api/lists", shoppingListsRoute);

module.exports = router;
