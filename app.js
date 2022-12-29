require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
}); // Config environment
const express = require("express"); // Import expres
//   const cors = require("cors");
const morgan = require("morgan");
const app = express(); // Make express app

app.use(morgan("dev"));

/* Import routes */
const books = require("./routes/books");
const users = require("./routes/users");

/* Import response */
const response = require("./middlewares/response");

/* Enable req.body */
app.use(express.json()); // Enable req.body JSON
// Enable url-encoded
app.use(
  express.urlencoded({
    extended: true,
  })
);

/* Make public folder as static */
app.use(express.static("public"));

/* Use routes */
app.get("/", async (req, res, next) => {
  try {
    res.redirect("https://documenter.getpostman.com/view/14563768/TzzGFt9w");
  } catch (error) {
    next(error);
  }
});

/* The routes */
const version = "/api/v1";

app.use(`${version}/books`, books);
app.use(`${version}/users`, users);

/* If routes not
  found */
app.all("*", (req, res, next) => {
  try {
    next({
      message: "Endpoint not Found",
      error: "Not Found",
      statusCode: 404,
    });
  } catch (error) {
    next(error);
  }
});

/* User response */
app.use(response);

/* Running server */
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
