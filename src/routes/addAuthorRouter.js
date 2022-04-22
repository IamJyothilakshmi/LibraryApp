const express = require('express');
const addAuthorRouter=express.Router();
const Authorsdata = require('../model/Authorsdata');
function router(nav){
    addAuthorRouter.get('/',function(_req,res){
        res.render('addAuthor',{
    nav,
    title:'Add Author'
        });
    });
    addAuthorRouter.post('/add',function(req,res){
        var items = {
            title:req.body.title,
            // author:req.body.author,
            // genre:req.body.genre,
            image:req.body.image,
            about:req.body.about
            
        }
        var author = Authorsdata(items);
author.save();
res.redirect('/authors');
    })
    return addAuthorRouter;
}
module.exports=router;
