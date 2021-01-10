const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json()); //Type JSON

const authRoutes = require('./src/routes/auth');
const blogRoutes = require('./src/routes/blog');

app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
    
    
});

app.use('/v1/auth',authRoutes)
app.use('/v1/blog',blogRoutes);

app.use((error,req,res,next) =>{
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message:message,data:data});
});

mongoose.connect('mongodb://localhost/blog',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

.then(()=>{
    app.listen(4000, () => console.log('Connection Succes'));
})
.catch(err => console.log(err));


