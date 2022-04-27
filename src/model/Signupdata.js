const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://userone:userone@ictakfiles.aladj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    First_Name : String,
    Last_Name : String,
    Email_Id : String,
    Password : String
});
var Userdata = mongoose.model('userdata',UserSchema);
module.exports = Userdata;