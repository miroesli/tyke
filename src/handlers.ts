/**
 * Don't worry about anything in this file,
 * focus on writing your snake logic in index.js endpoints.
 */

export const poweredByHandler = (_req: any, res: any, next: any) => {
  res.setHeader("X-Powered-By", "Battlesnake");
  next();
};

export const fallbackHandler = (req: any, res: any, next: any) => {
  console.dir(req.baseUrl);
  // Root URL path
  if (req.baseUrl === "") {
    res.status(200);
    return res.send(`
      Battlesnake documentation can be found at
       <a href="https://docs.battlesnake.io">https://docs.battlesnake.io</a>.
    `);
  }

  // Short-circuit favicon requests
  if (req.baseUrl === "/favicon.ico") {
    res.set({ "Content-Type": "image/x-icon" });
    res.status(200);
    res.end();
    return next();
  }

  // Reroute all 404 routes to the 404 handler
  // const err = new Error();
  // err.status = 404;
  var err = new Error("Not Found");
  res.status(404);

  return next(err);
};

export const notFoundHandler = (err: any, _req: any, res: any, next: any) => {
  if (err.status !== 404) {
    return next(err);
  }

  res.status(404);
  return res.send({
    status: 404,
    error: err.message || "These are not the snakes you're looking for"
  });
};

export const genericErrorHandler = (
  err: any,
  _req: any,
  res: any,
  _next: any
) => {
  const statusCode = err.status || 500;

  res.status(statusCode);
  return res.send({
    status: statusCode,
    error: err
  });
};

module.exports = {
  fallbackHandler,
  notFoundHandler,
  genericErrorHandler,
  poweredByHandler
};
