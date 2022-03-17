const express=require("express");

const Authorsdata = require('../model/Authorsdata')
const authorsRouter=express.Router();

function router(nav){
    var authors=[
        {
             title:'Álex Pina',
            author: 'Money Heist',
            //  genre: 'Crime Thriller',
            imgAuthor: 'alex pina.jpg'
        },
        {
           title:'L. J. Smith',
           author: 'Vampire Dairies',
        //    genre: ' Thriller',
           imgAuthor: 'LJSmith.jpg'
       },
       {
        title:'Jantje Friese',
        author: 'Dark',
        // genre: ' Thriller',
        imgAuthor: 'Jantje Friese.jpg'
    },
    {
        title:'David Crane',
        author: 'Friends',
        // genre: ' Thriller',
        imgAuthor: 'David Crane.jpg'
    }
    ]


 authorsRouter.get('/',function(req,res){

    res.render("authors",
    {
        nav,
    title:'Authors',
    authors
    })
})

 authorsRouter.get('/:id',function (req,res) {
    const id=req.params.id
   
        res.render("author",
        {
            nav,
            title:'library',
            author:authors[id]
        });
        })
    
    


 return authorsRouter;
}
 module.exports=router;
