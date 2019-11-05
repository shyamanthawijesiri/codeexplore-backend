const express=require('express');
const app=express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');



const applicantRoutes = require('./routes/applicant');



const port=3000;




app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://GeveoAust:geveo1234@freecluster-toxk5.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true},function(err){
    if(err){
        console.log("Database connecting error "+err)
    }
    else{
        console.log("Database connection succesfull");
    }
});

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS'){ 
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE')
        return res.status(200).json({});
    }
    next();
  });

  app.listen(port, function(){
    console.log("Server running on localhost:" + port);
})

app.use('/applicant',applicantRoutes);

module.exports = app;