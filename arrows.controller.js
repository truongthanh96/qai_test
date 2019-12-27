import express from 'express';
const app = express();

app.get("/arrows/:arrowId", (req, res) => {
  res.send({
    message: "I'm an arrow function"
  })
})

module.exports = (app) => {
       app.get('/users/:userId', (req, res) => {
         res.send({ "message": "Hello world" });
       });
    }
