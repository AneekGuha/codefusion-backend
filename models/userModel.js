const { name } = require("ejs");
const mongoose=require("mongoose");

mongoose.connect('mongodb+srv://aneekguha4:oGGUsFt7tQ1DakqE@cluster0.9jpu9.mongodb.net/');

let userSchema=new mongoose.Schema({
    name:String,
    username:String,
    email:String,
    password:String,
    date:{
        type:Date,
        default:Date.now
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});

module.exports=mongoose.model('User',userSchema);