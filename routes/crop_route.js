const express = require('express');
const dbConnection = require('../db/connection');


const cropRoute = express.Router();

cropRoute.route("/:cropName").get(async function(req,res){
    const db = dbConnection.getDb();
    const cursor = db
    .collection('crops')
    .find({cropName:req.params.cropName},{projection:{_id:0}})

   cursor.forEach((crop)=>{
       res.set('Access-Control-Allow-Origin', '*')
       res.json(crop)
   })
    
})

module.exports = cropRoute