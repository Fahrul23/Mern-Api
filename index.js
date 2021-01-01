const express = require('express');
const app = express();

const producRoutes = require('./src/routes/products');

app.use('/v1/customer',producRoutes);



app.listen(4000);