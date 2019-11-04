const express = require('express');
const router = express.Router();


const Applicant = require('../models/applicant');



//insert form 1 data
router.post('/form1',(req,res)=>{
    console.log('error gggggggggd')
    const applicant=new Applicant({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        NIC:req.body.NIC
    });
   applicant
    .save(function(err,applicant){
        if(err){
            console.log("Applicant form1  data storing error"+err);
        }else{
            console.log(applicant)
            res.status(200).json({
                applicant:applicant,
                state:true,
                msg:"successfuly stored form1 data "});
        }

    })


});

//insert form 2 data 
router.put('/form2/:id',(req,res)=>{
  
  Applicant
  .findOneAndUpdate({_id:req.params.id},
  {
     $set:{
         
         LinkIn:req.body.LinkIn,
         expectedSalary: req.body.expectedSalary,
         availability:req.body.availability,
         priority: req.body.priority,
         referral: req.body.referral
         

     }
 },
 
     {
      new:true  
     },
     function(err,applicant){
         if(err){
             
             res.send('form 2 data storing error');
         }
         else{
            res.status(200).json({
                applicant:applicant,
                state:true,
                msg:"successfuly stored form2 data "});
             
         }
     }
 
  )
 
 
 });

 //insert form 3 data
 router.put('/form3/:id',(req,res)=>{
  
    Applicant
    .findOneAndUpdate({_id:req.params.id},
    {
       $set:{
           
        interviewerComment:req.body.interviewerComment,
        interviewScope: req.body.interviewScope,
        textResult:req.body.textResult,
        salaryDetails: req.body.salaryDetails,
        rates: req.body.rates
           
  
       }
   },
   
       {
        new:true  
       },
       function(err,applicant){
           if(err){
               
               res.send('form 3 data storing error');
           }
           else{
            res.status(200).json({
                applicant:applicant,
                state:true,
                msg:"successfuly stored form3 data "});
           }
       }
   
    )
   
   
   });


 // Get all Applicant details
router.get('/allApplicantDetails',(req,res)=>{
    
     Applicant.find({})
       .exec(function(err,applicants){
           if(err){
               console.log("Applicant Detail Retriving error "+err)
           }
           else{
               res.json(applicants)
           }
       })
  
 
 })

// Get Paricular Applicant Details
router.get('/:id',(req,res)=>{
    Applicant.findById(req.params.id)
      .exec(function(err,applicant){
          if(err){
              console.log("Applicant detail Retriving error "+err)
          }
          else{
              res.json(applicant)
          }
      })
})



module.exports=router;