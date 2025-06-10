const {getDataForCrypto} = require('../services/binance')


async function cryproDataController(req, res) {
    const pair = req.params.currency
    const timestamp = req.params.timestamp
    
}