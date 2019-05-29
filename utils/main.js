var mongoose=require('mongoose'),
    schema=mongoose.Schema,
    jwt = require('jsonwebtoken');

var myschema=new schema({
    Team:{type:String},
    Name:{type:String},
    email:{type:String},
    numofmembers:{type:Number},
    Typeoffield:{type:String}
});
var data=require('../json');
var sec='Innovapath';
//var token;
var justmodel=mongoose.model('trick',myschema);

function model(){
    this.justmodel = justmodel;
   //am=new ameermodel()
}
console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
model.prototype.get=function(req,callback){
  this.justmodel.find(req.params,callback)

};
model.prototype.findOne=function(id,callback){
    console.log(id)
    this.justmodel.findOne({_id: id}, callback)
}
model.prototype.create=function(data,callback){
    var self=this;
    self.justmodel.find({"Team":data.Team},function(err,res){
        if(err){
            callback(err,null)
        }else {
            if(data.email==='basha.ipp@gmail.com'){
                jwt.sign(data,sec,{ expiresIn: 60 }, function (err,tokendata) {
                    //token=tokendata;
                  callback(null,{token: token=tokendata});
                });
            }else {
                if(res.length){
                    console.log(res)
                    if(data.Team === res[0].Team){
                        callback(null,"this email is already exit")
                    }
                }else{
                    self.justmodel.create(data,function(err,res1){

                        if(err){
                            callback(err,null)
                        }else{
                            callback(null,res1)
                        }
                    })
                }
            }


        }
    })


}
module.exports=model;