const router = require("express")
const app = express()
app.set("veiw engine", "ejs")

app.use("/", router)

app.listen(3000, () => {
  console.log("I took a trip to the port 3000")
})
