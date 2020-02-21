import express from 'express';
const app = express();
const test="test";
const test="test2";

module.exports = (app) => {
       app.get('/users/:userId', (req, res) => {
         res.send({ "message": "Hello world" });
       });
       const test="test2";
    };

app.get("/arrows/:arrowId", (req, res) => {
  res.send({
    message: "I'm an arrow function"
  })
})
