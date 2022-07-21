const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
    res.status(200).json({ message: "Get all shopping lists..." });
});

router.post("/", (_, res) => {
    res.status(201).json({
        message: "New shopping list was created successfully",
    });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: "Get shopping list for id :: " + id });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: "Successfully deleted shopping list for id -> " + id,
    });
});

router.patch("/:id", (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: "Successfully updated shopping list for id -> " + id,
    });
});

module.exports = router;
