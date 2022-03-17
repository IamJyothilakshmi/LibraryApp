const express = require('express');
const addAuthorRouter=express.Router();
const Authorsdata = require('../model/Authorsdata');
function router(nav){
    addAuthorRouter.get('/',function(req,res){
        res.render('addAuthor',{
    nav,
    title:'Add Author'
        })
    }),
    addAuthorRouter.post('/add',function(req,res){
        var item = {
            title:req.body.title,
            // author:req.body.author,
            // genre:req.body.genre,
            image:req.body.image,
            about:req.body.about
            
        }
        var author = Authordata(item);
author.save();
res.redirect('/authors');
    })
    return addAuthorRouter;
}
module.exports=router;
