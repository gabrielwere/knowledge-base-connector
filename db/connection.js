const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
let db;

function connectToServer(callback){
    mongoClient.connect(url,{useNewUrlParser:true},(err,client)=>{
        
        db = client.db('crops');
        return callback(err);
    })
}

function getDb(){
    return db;
}

module.exports = {connectToServer,getDb}