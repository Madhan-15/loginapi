const express = require('express');
//const cors = require('cors');
// const regg = require('./model/regmodel');
const register = require('./route/logroute');
const app = express();


app.use(express.json());
app.use('/api', register);
app.use('/' ,(req,res)=>{
    console.log('hii vro ');
})

app.listen(3000,()=>{
    console.log('local host connected');
    
})
