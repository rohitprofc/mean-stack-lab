// Experiment 5
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Rohit');
});

const port = 8800;

app.listen(port, () => {
    console.log(`Application is running at http://localhost:${port}`);
});