var express = require('express'),
    router = express.Router();

router.get('/',function(req,res){
   res.send("welcome to hareesh");
});
router.use('/signUp',require('./signUp'))
module.exports=router;
