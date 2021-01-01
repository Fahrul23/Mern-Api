const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); //Type JSON

const producRoutes = require('./src/routes/products');

app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
    
});

app.use('/v1/customer',producRoutes);



app.listen(4000);