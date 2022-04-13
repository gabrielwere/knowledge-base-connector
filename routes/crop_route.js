const express = require('express');
const dbConnection = require('../db/connection');


const cropRoute = express.Router();

cropRoute.route("/").get(async function(req,res){
    const db = dbConnection.getDb();
    db
    .collection('crops')
    .find({cropName:"Beans"})
    .toArray()
    .then((result)=>{
        res.json(result)
    })
})

module.exports = cropRoute