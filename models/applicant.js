const mongoose = require('mongoose');


//Applicant schema

const applicantSchema = mongoose.Schema({
    name: {
        type: String
    },
    
    email: {
        type: String,
      
    },
    
    phone: {
        type: String,
    },
    NIC: {
        type: String,
    },
    LinkIn: {
        type: String,
    },
    expectedSalary: {
        type: Number,
    },
    availability: {
        type: String,
    },
    priority: {
        type: String,
    },
    referral: {
        type: String,
    },
    interviewerComment: {
        type: String,
    },
    
    interviewScope: {
        type: String,
    },
      
    textResult: {
        type: String,
    },
      
    salaryDetails: {
        type: String,
    },
      
    notes: {
        type: String,
    },
    rates: {
        type: String,
    },
    

    

    

    
    
    
    
    
    
});

const User = module.exports = mongoose.model('applicant', applicantSchema);

