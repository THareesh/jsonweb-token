var mongoose = require('mongoose'),
signUpSchema= new mongoose.Schema({
   name:String,
   email:String,
   password:String
});
User = mongoose.model("datafile23",signUpSchema);
mongoose.connect("mongodb://localhost:27017/postdata22");
module.exports= User;