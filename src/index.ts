import bodyParser = require("body-parser");
import express = require("express");
import logger = require("morgan");
import {
  fallbackHandler,
  notFoundHandler,
  genericErrorHandler,
  poweredByHandler
} from "./handlers";
const app = express();

// For deployment to Heroku, the port needs to be set using ENV, so
// we check for the port number in process.env
app.set("port", process.env.PORT || 9001);

app.enable("verbose errors");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(poweredByHandler);

// --- SNAKE LOGIC GOES BELOW THIS LINE ---

// Handle POST request to '/start'
app.post("/start", (_request, response) => {
  // NOTE: Do something here to start the game

  // Response data
  const data = {
    color: "#DFFF00"
  };

  return response.json(data);
});

// Handle POST request to '/move'
app.post("/move", (_request, response) => {
  // NOTE: Do something here to generate your move

  // Response data
  const data = {
    move: "up" // one of: ['up','down','left','right']
  };

  return response.json(data);
});

app.post("/end", (_request, response) => {
  // NOTE: Any cleanup when a game is complete.
  return response.json({});
});

app.post("/ping", (_request, response) => {
  // Used for checking if this snake is still alive.
  return response.json({});
});

// --- SNAKE LOGIC GOES ABOVE THIS LINE ---

app.use("*", fallbackHandler);
app.use(notFoundHandler);
app.use(genericErrorHandler);

app.listen(app.get("port"), () => {
  console.log("Server listening on port %s", app.get("port"));
});
