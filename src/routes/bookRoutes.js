const express=require("express");
const Bookdata=require("../model/Bookdata");
const booksRouter=express.Router();
function router(nav){
var books=[
    {
        title:'Money Heist',
        author: 'Álex Pina',
        genre: 'Crime Thriller',
        img: 'moneyheist.jpg',
         imgAuthor:'alex pina.jpg'
    },
    {
       title:'Vampire Dairies',
       author: 'L. J. Smith',
       genre: ' Thriller',
       img: 'vampiredairies.jpg',
       imgAuthor:'L.J.Smith.jpg'
   },
   {
       title:'Dark',
       author: 'Jantje Friese',
       genre: 'Science Fiction',
       img: 'dark.jpg',
       imgAuthor:'Jantje Friese.jpg'
   },
   {
       title:'Friends',
       author: 'David Crane',
       genre: 'Comedy',
       img: 'friends.jpg',
       imgAuthor:'David Crane.jpg'
   }
]

booksRouter.get('/',function(req,res){
   
        res.render("books",
        {
            nav,
       
        title:'Books',
        books
    
    });
    });
    
    
booksRouter.get('/:id',function (req,res) {
    const id=req.params.id
    
        res.render('book',
        {
            nav,
         
         title:'library',
         book:books[id] 
         });
    })
    

return booksRouter;
}
module.exports=router;