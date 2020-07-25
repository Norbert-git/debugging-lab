const express = require('express')
const app = express();
const router = express.Router()

app.get('/kittens', (request, response) => {
  response.render('index.ejs', { kittens })
})


app.use("/", router)

app.listen(3000, () => {
  console.log("I took a trip to the port 3000")
})
