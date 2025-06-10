async function getDataForCrypto(pair, timestamp) {
    const url = `https://api.binance.com/api/v3/klines?symbol=${pair}&interval=${timestamp}`;
    console.log(url)
    try {
        const response = await fetch(url);
        console.log(response)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        return json
    } catch (error) {
        console.error(error.message);
    }
}


module.exports = getDataForCrypto