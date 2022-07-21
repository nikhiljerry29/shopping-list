require("dotenv").config();
const express = require("express");

const server = express();

/**
 * Common middleware for server settings.
 */
server.use(express.json());

/**
 * Middleware for displaying information about different api endpoints calls
 * TODO: Fix status code value for different api endpoints
 */
server.use((req, res, next) => {
    console.log(req.method, req.path, res.statusCode);
    next();
});

/**
 * This route is used to navigate to all endpoints and  retrieve information about them
 */
const homeRoute = require("./routes/home.route");
server.use("/", homeRoute);

/**
 * Application listening on port for API requests
 */
const port = process.env.PORT;
server.listen(port, (err) => {
    if (!err) console.log(`Application server running on port :: ${port}`);
});
