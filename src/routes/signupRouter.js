const express = require('express');
const signupRouter=express.Router();
const user=require("../data/user")
const Signupdata = require('../model/Signupdata');
function router(nav){
    signupRouter.get('/',function(req,res){
        res.render('signup',
        {
             nav,
             title:'Sign Up'
        })
    })
    signupRouter.post('/adduser',function(req,res){
        var details={
            "firstname":req.body.firstname,
            "lastname":req.body.lastname,
            "uid":req.body.uid,
            "pwd":req.body.pwd
        }
         var user=Signupdata(details);
        user.save();
        res.redirect("/login");
    })
    return signupRouter;
}

module.exports=router;