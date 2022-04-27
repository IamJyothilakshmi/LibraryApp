 const express = require("express");
    //   const authorsRouter=express.Router();
 const app = new express();
 const bodyParser = require("body-parser");
  const path = require("path");
//   const cors = require("cors");
 const nav=[
   
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/admin',name:'Add Book'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/signup',name:'SignUp'
    },
    {
        link:'/addAuthor',name:'Add Author'
    }
    
]

 const booksRouter=require("./src/routes/bookRoutes")(nav);
 const adminRouter=require("./src/routes/adminRouter")(nav);
   const authorsRouter=require("./src/routes/authorsRouter")(nav);
   const addAuthorRouter=require("./src/routes/addAuthorRouter")(nav);

  const loginRouter = require('./src/routes/loginrouter')(nav);
  const signupRouter = require('./src/routes/signuprouter')(nav);
//   const editBooksRouter = require('./src/routes/editBooksRouter')(nav);
//   const editAuthorsRouter = require('./src/routes/editAuthorsRouter')(nav);
    app.use(express.urlencoded({extended:true}));

 
    app.use(express.json())
 app.use(express.static(path.join('./public')))
//  app.use(cors());
 app.set('view engine','ejs');
 app.set('views','./src/views');
 app.use(bodyParser.urlencoded({extended:true}))

 app.use('/books',booksRouter);
 app.use('/admin',adminRouter);
 app.use('/authors',authorsRouter);
 app.use('/addAuthor',addAuthorRouter);
    app.use('/login',loginRouter); 
  app.use('/signup',signupRouter);
//    app.use('/editAuthors',editAuthorsRouter);
//    app.use('/editBooks',editBooksRouter);
 app.get("/",function(req,res){
     res.render("index",
     {
         nav,
     title:'Library'


    });
 });



const PORT = process.env.PORT || 5000;
 app.listen(PORT,()=>{
     console.log(`LibraryApp is running on the ${PORT}`);
})
// app.listen(process.env.PORT || 3000, function(){
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env)
// })

