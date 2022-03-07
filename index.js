import express from "express";

const app = express()



app.get('/cats', (req, res) => {
  console.log("Got a new req from meow")
  res.send("<h1>Meow meow meow meow meow</h1>")
})

app.get('/r/:subreddit', (req, res) => {
  // to get params from url 
  const { subreddit } = req.params
  res.send(`What does the fox say ${subreddit}`)

})


// app.use((req, res) => {
//   console.log("Got a new req")
//   res.send("<h1>This is a fkin request</h1>")
// })

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000")
})