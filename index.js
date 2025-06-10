const express = require('express')
const app = express()
const port = 3000

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});