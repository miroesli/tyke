"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var logger = require("morgan");
var app = express();
var handlers_1 = require("./handlers");
// For deployment to Heroku, the port needs to be set using ENV, so
// we check for the port number in process.env
app.set("port", process.env.PORT || 9001);
app.enable("verbose errors");
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(handlers_1.poweredByHandler);
// --- SNAKE LOGIC GOES BELOW THIS LINE ---
// Handle POST request to '/start'
app.post("/start", function (request, response) {
    // NOTE: Do something here to start the game
    // Response data
    var data = {
        color: "#DFFF00"
    };
    return response.json(data);
});
// Handle POST request to '/move'
app.post("/move", function (request, response) {
    // NOTE: Do something here to generate your move
    // Response data
    var data = {
        move: "up" // one of: ['up','down','left','right']
    };
    return response.json(data);
});
app.post("/end", function (request, response) {
    // NOTE: Any cleanup when a game is complete.
    return response.json({});
});
app.post("/ping", function (request, response) {
    // Used for checking if this snake is still alive.
    return response.json({});
});
// --- SNAKE LOGIC GOES ABOVE THIS LINE ---
app.use("*", handlers_1.fallbackHandler);
app.use(handlers_1.notFoundHandler);
app.use(handlers_1.genericErrorHandler);
app.listen(app.get("port"), function () {
    console.log("Server listening on port %s", app.get("port"));
});
//# sourceMappingURL=index.js.map