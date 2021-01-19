const express = require('express');

const application = express();
const port = 8000;

application.get('/', (req, res) => {
    res.send('Hello World!')
});

application.listen(port, () => {
    console.log(`application running on port ${port}`)
});