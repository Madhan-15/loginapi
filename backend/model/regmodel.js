
const { Sequelize, DataTypes } = require('sequelize');
const express = require('express');
const mysql = require('mysql2');
const app =express();

const sequelize = new Sequelize('sign', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });


const regg = sequelize.define ('regg',{
 //const regg = express.define(req,res,next ,{
    username:{
        type:DataTypes.STRING,
        allownull:'false'
    },
    email:{
        type:DataTypes.STRING,
        allowNull:'false'

    },
    password:{
        type:DataTypes.STRING,
        allowNull:'false'
    }

});

sequelize.sync ()
.then(()=>{
    console.log('synced');
})
.catch((err)=>{
    console.log("not synced");
})
module.exports=regg;