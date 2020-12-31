const express = require('express');
const app = express();
const router = express.Router();

router.use('/product', (req,res,next) =>{
    
    res.json({name:"Fahrul Ihsan",email : "Fahrul@gmail.com"})
    next();
})

router.use('/price',(req,res,next)=>{

    res.json({price:6000000,})
    next();
})

router.get('/customer',(req,res,next)=>{
    res.json({title:"customer"})
    next();

})

app.use('/',router);

app.use(function(){
    console.log('server ready')
})

// GET

app.listen(4000);