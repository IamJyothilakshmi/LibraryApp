const express=require("express");
const booksRouter=express.Router();
function router(nav){
var books=[
    {
        title:'Money Heist',
        author: 'Álex Pina',
        genre: 'Crime Thriller',
        img: 'moneyheist.jpg'
    },
    {
       title:'Vampire Dairies',
       author: 'L. J. Smith',
       genre: ' Thriller',
       img: 'vampiredairies.jpg'
   },
   {
       title:'Dark',
       author: 'Jantje Friese',
       genre: 'Science Fiction',
       img: 'dark.jpg'
   },
   {
       title:'Friends',
       author: 'David Crane',
       genre: 'Comedy',
       img: 'friends.jpg'
   }
]

booksRouter.get('/',function(req,res){
    res.render("books",
    {
        nav,
   
    title:'Library',
    books

});
});
booksRouter.get('/:id',function (req,res) {
    const id=req.params.id
    res.render('book',{
       nav,
    
    title:'Library',
    book:books[id] 
    });
});
return booksRouter;
}
module.exports=router;