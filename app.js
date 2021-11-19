const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("test server");
});

app.listen(port, () => {
    console.log("serevr is running on port 3000 successfully!");
});