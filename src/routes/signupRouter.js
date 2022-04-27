const express = require('express');
const signupRouter=express.Router();
const user=require("../data/user")
    signupRouter.get('/',function(req,res){
        res.render('signup',
        {
            // nav,
            // title:'Sign Up'
        })
    })
    signupRouter.get('/adduser',function(req,res){
        var details={
            
            "uid":req.query["uid"],
            "pwd":req.query["pwd"]
        }
         user.push(details);
        // user.save();
        res.redirect("/login");
    })
    

module.exports=signupRouter;