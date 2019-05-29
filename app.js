var express = require('express'),
    app =express();
console.log("fffffffff");
var bodyParser = require('body-parser');
   app.use(bodyParser.json());
app.use('/',function(req,res,next){
    if(req.url.substr(-1)==='/'){
        console.log("first loop");
        res.send("welcome to innovapath");
    }
    next();
});
app.use('/hari',require('./routes/hari.js'));
app.listen(8080);
module.exports=app;

