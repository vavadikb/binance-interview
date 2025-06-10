const express = require('express')
const app = express()
const port = 3001


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getCryptoData/:pair/:timestamp', (req, res) => {
  console.log(req.params.pair, req.params.timestamp)
  res.send()
})


app.listen(port, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});