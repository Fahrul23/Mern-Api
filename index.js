const express = require('express');
const app = express();

app.use(function(){
    console.log('server ready')
})

app.listen(4000);