const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwtKey = "e-comm";

const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];
  if (token) {
    token = token.split(" ")[1];
    jwt.verify(token, jwtKey, (err, valid) => {
      if (err) {
        res.status(401).json({
          message: "Please provide valid token",
        });
      } else {
        next();
      }
    });
  } else {
    res.status(403).json({
      message: "Please add token with header",
    });
  }
};

module.exports = verifyToken;
