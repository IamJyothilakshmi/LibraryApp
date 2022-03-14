const express=require("express");
// const adminRouter =express.Router();
const authorsRouter=express.Router();
function router(nav){
    var authors=[
        {
            // title:'Money Heist',
            author: 'Álex Pina',
            // genre: 'Crime Thriller',
            img: 'moneyheist.jpg'
        },
        {
           title:'Vampire Dairies',
           author: 'L. J. Smith',
           genre: ' Thriller',
           img: 'vampiredairies.jpg'
       },
       {
        title:'Vampire Dairies',
        author: 'L. J. Smith',
        genre: ' Thriller',
        img: 'vampiredairies.jpg'
    },
    {
        title:'Vampire Dairies',
        author: 'L. J. Smith',
        genre: ' Thriller',
        img: 'vampiredairies.jpg'
    }
    ]


 authorsRouter.get('/',function(req,res){
     res.send("authors",
     {
         nav,
    
     title:'Library',
     authors
 
 });
 });
 authorsRouter.get('/:id',function (req,res) {
    const id=req.params.id
    res.render('author',{
       nav,
    
    title:'Library',
    author:authors[id] 
    });
});
 return authorsRouter;
}
 module.exports=router;
