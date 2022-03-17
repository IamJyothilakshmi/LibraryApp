const express=require("express");
const booksRouter=express.Router();
function router(nav){
var authors=[
    
        {
            "id":1,
            "title":"Arundhati Roy", 
            "image":"/images/moneyheist.jpg",
            "about":"Arundhati Roy was born in 1960 in Kerala, India. She studied architecture at the Delhi School of Architecture and worked as a production designer. She has written two screenplays, including Electric Moon (1992), commissioned by Channel 4 television. She lives in Delhi with her husband, the film-maker Pradip Krishen. The God of Small Things, her first novel, won the Booker Prize for Fiction in 1997 and has sold over six million copies worldwide. An immediate bestseller, the novel was published simultaneously in 16 languages and 19 countries, but caused controversy in India for the description of a love affair between a Syrian Christian and a Hindu 'untouchable'. Set in Ayemenem in Kerala, a rural province in southern India, it is the story of two twins, Estha and Rahel, their reunion after 23 years apart and their shared memories of the events surrounding the accidental death of their English cousin, Sophie Mol, in 1969. She is also the author of several non-fiction books,including: The Cost of Living (1999), a highly critical attack on the Indian government for its handling of the controversial Narmada Valley dam project and for its nuclear testing programme; Power Politics (2001), a book of essays; and The Algebra of Infinite Justice, a collection of journalism. The Ordinary Person's Guide to Empire was published in 2004. She has since published a further collection of essays examining the dark side of democracy in contemporary India, Listening to Grasshoppers: Field Notes on Democracy (2009). Arundhati Roy was awarded the Lannan Prize for Cultural Freedom in 2003. Her latest book is The Ministry of Utmost Happiness (2017), her second novel. It was longlisted for the Man Booker Prize and, in the US, was a finalist for the National Book Critics Circle Award."
        }
    
]
authorsRouter.get('/',function(req,res){
    res.render("authors",
    {
        nav,
   
    title:'Library',
    authors

});
});
return booksRouter;
}
module.exports=router;
module.exports = authors;