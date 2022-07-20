const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! Edited the app.js from browser for new build using pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
