const express = require('express')
const getDataForCrypto = require('./services/binance')

const app = express()
const port = 3001


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getCryptoData/:pair/:timestamp', async (req, res) => {

  const result = await getDataForCrypto(req.params.pair, req.params.timestamp)
  res.send(result)
})


app.listen(port, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});