const express = require('express');
const app = express();
const mongoConnection = require('./db/connection');

const port = 3000;

mongoConnection.connectToServer(function(err){
    if(err) console.log(err)
    const getCrops = require('./routes/crop_route');

    app.use('/crops',getCrops)
    app.listen(port,()=>{
        console.log(`Server running on port ${port}`)
    })
})


