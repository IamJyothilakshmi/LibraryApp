const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://userone:userone@ictakfiles.aladj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const Schema = mongoose.Schema;
const LoginSchema = new Schema({
    First_Name : String,
    Last_Name : String,
    Email_Id : String,
    Password : String
});
var Logindata = mongoose.model('logindata',LoginSchema);
module.exports = Logindata;