// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

app.use(require("cookie-parser")());

// https://expressjs.com/en/starter/basic-routing.html
app.get("*", (request, response) => {
  response.write("<h1>Rewrite inspector!</h1>")
  response.write(`<h2>URL</h2><pre>${request.protocol}://${request.get('host')}${request.originalUrl}</pre>`)
  response.write(`<h2>Query Parameters</h2><pre>${JSON.stringify(request.query, null, 2)}`)
  response.write(`<h2>Headers</h2><pre>${JSON.stringify(request.headers, null, 2)}`)
  response.write(`<h2>Cookies</h2><pre>${JSON.stringify(request.cookies, null, 2)}`)
  response.end()
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
