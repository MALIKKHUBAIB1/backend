// const http = require("http");
// import http from "http";
const express = require("express");
// import express from "express";
const app = express();
app.use("/contact", (req, res, next) => {
  console.log("i am the middileware");
  // next(); // allow us to request continue to the next middleware in next line
  res.send("<h1>Contact Page</h1>");
});
app
app.use("/", (req, res, next) => {
  console.log("i am the another  middileware");
  //  send allows us to the send the response
  res.send('<h1>"Home Page"</h1>');
  next();
});

//routing at home page

// app.get("/", (req, res, next) => {
//   console.log("home page");
//   res.send("<h1>home Page</h1>");
// });
// app.get("/contact", (req, res, next) => {
//   console.log("home page");
//   res.send("<h1>contact Page</h1>");
// });
const port = 3000;
app.listen(port, () => {
  console.log("server listening 3000");
});
