const express = require('express');
//const cors = require('cors');
// const regg = require('./model/regmodel');
const morgan = require('morgan');
const register = require('./route/logroute');
//const login = require('./route/logroute');


const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', register);
// app.use('/api',login);
app.use('/api',register);
app.use('/' ,(req,res)=>{
    res.send(message);
    console.log('hii vro ');
})

app.listen(3000,()=>{
    console.log('local host connected');
    
})
