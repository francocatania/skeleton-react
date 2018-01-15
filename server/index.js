require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(`${req.path}, ${req.method}, ${req.status}, ${JSON.stringify(req.body)}`);
  next();
});
app.use(require('body-parser').urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(process.env.PORT || 3000);


