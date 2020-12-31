const express = require('express');
const app = express();

const producRoutes = require('./src/routes/products');

app.use('/',producRoutes);



app.listen(4000);