 const express=require("express");
    //   const authorsRouter=express.Router();
 const app =new express();
 
  const path=require("path");
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
//    const addauthorRouter
  const loginRouter = require('./src/routes/loginrouter')(nav);
  const signupRouter = require('./src/routes/signuprouter')(nav);
//   const updateBooksRouter = require('./src/routes/updateBooksRouter')(nav);
//   const updateAuthorsRouter = require('./src/routes/updateAuthorsRouter')(nav);
    app.use(express.urlencoded({extended:true}));

 

 app.use(express.static('./public'))
 app.set('view engine','ejs');
 app.set('views','./src/views');
; 
 app.use('/books',booksRouter);
 app.use('/admin',adminRouter);
 app.use('/authors',authorsRouter);
 app.use('/addAuthor',addAuthorRouter);
    app.use('/login',loginRouter); 
  app.use('/signup',signupRouter);
//   app.use('/updateAuthors',updateAuthorsRouter);
 app.get("/",function(req,res){
     res.render("index",
     {
         nav,
     title:'Library'


    });
 });
//  app.get("/authors",(req,res)=>{
//      res.sendFile(path.join(__dirname,"views","authors.ejs"))
//  })
// authorsRouter.get('/',function(req,res){
//     res.render("authors",{
//         nav,
//         title:'Authors'
//     })
// })

 app.listen(5000);
  console.log("Server is ready at port no 5000");

