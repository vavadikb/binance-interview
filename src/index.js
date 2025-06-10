const express = require('express')
const {getDataForCrypto} = require('./services/binance')
const {candlesAnalyzer} = require('./services/binance')

const app = express()
const port = 3001


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getCryptoData/:pair', async (req, res) => {

  const result = await getDataForCrypto(req.params.pair)


  res.send(result)
})


// period - X days ago
// timestamp
app.get('/getAnalyzedData/:pair/:period', async (req, res) => {

  const result = await getDataForCrypto(req.params.pair)

  const difference = await candlesAnalyzer(result, req.params.period)
  console.log(difference, 'diff')
  res.send(result)
})



app.listen(port, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});