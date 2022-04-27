const express=require("express");
const editBooksRouter=express.Router();
const Bookdata=require("../model/Bookdata");
editBooksRouter.get('/',function(req,res){
    res.render('editbooks');
});
editBooksRouter.post('/addbook',upload.single('Image'),function(req,res){
    var details={
        Book_Name:req.body.BookName
    };
    var book = Booksdata(details);
    book.save();
    res.redirect('/adminRouter')
});
module.exports=editBooksRouter;