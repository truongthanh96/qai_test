import express from 'express';
const app = express();
const test="test";

module.exports = (app) => {
       app.get('/users/:userId', (req, res) => {
         res.send({ "message": "Hello world" });
       });
    };

app.get("/arrows/:arrowId", (req, res) => {
  res.send({
    message: "I'm an arrow function"
  })
})


