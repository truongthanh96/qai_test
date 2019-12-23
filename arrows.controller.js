import express from 'express';
const app = express();

app.get("/arrows/:arrowId", (req, res) => {
  res.send({
    message: "I'm an arrow function"
  })
})
