const express = require('express');
const dbConnection = require('../db/connection');


const cropRoute = express.Router();

cropRoute.route("/:cropName").get(async function(req,res){
    const db = dbConnection.getDb();
    db
    .collection('crops')
    .find({cropName:req.params.cropName})
    .toArray()
    .then((result)=>{
        res.json(result)
    })
})

module.exports = cropRoute