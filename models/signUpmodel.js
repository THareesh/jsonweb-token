var sec = 'Innovapath';
var jwt= require('jsonwebtoken');
var user = require('./../utils/mongo-connection');
function SignupModule(){
 
}
SignupModule.prototype.find = function (data, callback) {
    user.find({"email": data.email}, function (err, res) {
        console.log(res);
       if (err) {
            callback(err, null)
        }else{
            if(data.email==='charayharish8@gmail.com'){
                jwt.sign(data,sec,{ expiresIn: 600 }, function (err,tokendata) {
                  callback(null,{token: token=tokendata});
                }); 
            }else {
            if(res.length) {
              callback(null, {"message": "this email is already exit"})
             }else{
                user.create(data, function (err, data) {
                      if(err){
                            callback(err,null)
                        }else{
                            callback(null,data)
                        }
                    });
                }
        }
    }
    })

}
SignupModule.prototype.findAll = function(req,callback){
    console.log(req);
    user.find({},function(err,data){
        if(err){
            callback(err,null)
        }else{
            callback(null,data)
        }
    })
}
SignupModule.prototype.findById = function(id,callback){
    console.log("id data",id);
    user.find({"_id":id},function(err,data){
         if(err){
             callback(err,null)
         }else{
             callback(null,data)
         }
    })
}
SignupModule.prototype.change = function(id,body,callback){
    user.update({"_id":id},body,function(err,data){
        if(err){
            callback(err,null)
        }else{
            callback(null,data)
        }
    })
}
SignupModule.prototype.delete = function(id,callback){
    user.remove({"_id":id},function(err,data){
        if(err){
            callback(err,null)
        }else{
            callback(null,data)
        }
    })
}

module.exports = SignupModule;









