const express = require("express");
const morgan = require("morgan");
const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// routes

app.get("/", (req, res) => res.send("home"));

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// listen
app.listen(app.get("port"), () =>
  console.log(`server on port ${app.get("port")}`)
);
