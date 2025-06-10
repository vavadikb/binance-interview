const express = require('express')
const { getDataForCrypto } = require('./services/binance')
const { candlesAnalyzer } = require('./services/binance')

const app = express()
const port = 3001

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// period - X days ago and 100 days maximum (api limit)
// timestamp
app.get('/getAnalyzedData/:pair/:period', async (req, res) => {
  const result = await getDataForCrypto(req.params.pair)
  const difference = await candlesAnalyzer(result, req.params.period)
  res.send(difference)
})



app.listen(port, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", port);
});