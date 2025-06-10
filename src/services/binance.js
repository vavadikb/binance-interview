// const express = require('express')
const fetch = require('fetch')


async function getDataForCrypto(pair, timestamp) {
    const url = "https://example.org/products.json";
    try {
        const response = await fetch(url);
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