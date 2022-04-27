const express=require('express');
const loginRouter=express.Router();

  const user=require("../data/user")
//   const Signupdata=require("../model/Signupdata");
 function router(nav){

    loginRouter.get('/',function(req,res){
        res.render('login',
        {
             nav,
             title:'Login'
        });
    });
    loginRouter.post('/check',function(req,res){
        var checkuser={
        uid:req.query['uid'],
        pwd:req.query['pwd']
        };
       
           console.log(checkuser);
           var check=false;
           for (let i = 0; i < user.length; i++) {
               if(checkuser.uid==user[i].uid&&checkuser.pwd==user[i].pwd){
                   check=true;
                   break;
               }

               else{
                   check=false;
               }
               
           };
           if (check==true){
               res.redirect('/books');
           }
           else{
               res.redirect('/signup');
           }
       })
    return loginRouter;
 }

     
module.exports=router;