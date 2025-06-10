const {getDataForCrypto} = require('../services/binance')


async function cryptoDataController(req, res) {
    const pair = req.params.currency
    const timestamp = req.params.timestamp
    const result = await getDataForCrypto(pair, timestamp)
    res.send(result)
}


module.exports = cryptoDataController