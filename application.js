const express = require('express');
const path = require('path');

const application = express();
const port = process.env.PORT || 8000;

application.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

application.get('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/bundle.js'))
});

application.listen(port, () => {
    console.log(`application running on port ${port}`)
});