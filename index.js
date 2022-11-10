'use strict';

const express = require('express');

// Constants
const PORT = 8080;
//const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(8080, () => {
  console.log(`Running on 8080`);
});

