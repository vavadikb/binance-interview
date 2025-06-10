async function getDataForCrypto(pair) {
    const url = `https://api.binance.com/api/v3/klines?symbol=${pair}&interval=1d&limit=100`;
    console.log(url)
    try {
        const response = await fetch(url);
        console.log(response)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        // console.log(json);
        return json
    } catch (error) {
        console.error(error.message);
    }
}




async function candlesAnalyzer(candles, period) {
    const candlesCopy = candles
    candlesCopy.reverse()

    const currentPrice = candles[0][1]
    const pricePeriodAgo = candles[period - 1][1]

    const onePercentChange = pricePeriodAgo / 100
    const difference = (currentPrice - pricePeriodAgo).toFixed(2)

    const percentsDiff = (difference / onePercentChange).toFixed(2)

    let status

    pricePeriodAgo > currentPrice ? status = 'down' : status = 'up'

    return { difference, percentsDiff, status }
}



module.exports = { getDataForCrypto, candlesAnalyzer }