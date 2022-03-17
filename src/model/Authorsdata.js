const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/library");
const Schema=mongoose.Schema;
const AuthorSchema= new Schema({
    title:String,
    img:String,
    about:String
})
var Authorsdata= mongoose.model("authorsdata",AuthorSchema);
module.exports=Authorsdata