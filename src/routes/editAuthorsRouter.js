const express=require("express");
const editAuthorsRouter=express.Router();
const Authorsdata=require("../model/Authorsdata");
editAuthorsRouter.get('/',function(req,res){
    res.render('editauthors');
});
editAuthorsRouter.post('/addauthor',upload.single('Image'),function(req,res){
    var details={
        Author_Name:req.body.AuthorName
    };
    var author= Authorsdata(details);
    author.save();
    res.redirect('/addAuthorRouter')
});
module.exports=editAuthorsRouter;