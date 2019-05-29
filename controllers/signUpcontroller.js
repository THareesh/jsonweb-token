var Model = require('./../models/signUpmodel'),
     jwt = require('jsonwebtoken');
 mo = new Model();
 function Controller(){

 }
 Controller.prototype.post=function(req,res){

    if(req.body&&req.body.email === 'charayharish8@gmail.com'){
        mo.find(req.body, function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(data)
            }
        })
    }else if (req && req.headers && req.headers.token) {

//         if(!req.body.email){
//             res.send("please enter email")
//         }
//         else if(!req.body.name){
//            res.send("please enter name")
//        } else if(req.body.password && req.body.password.length>5){
//            mo.find(req,function(err,data){
//                if(err){
//                    res.send(err);
//                }else{
//                    res.send(data);
//                }
       
//            });
//         }else{
//        res.send("minimum password 6 characters ")
//    }







        jwt.verify(req.headers.token, 'Innovapath',function (err,decodeToken) {
            if(err){
                res.send({mesg:"Token format is invalid"})
            }else if(decodeToken.email === 'charayharish8@gmail.com'){
                mo.find(req.body, function (err, data) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(data)
                    }
                })
            } else {
                res.send({message: "invalid Token"});
            }
        })
        
    }else {
        res.send({msg:'no token provided'})
    }
     
     
 }
 Controller.prototype.getAll=function(req,res){
    mo.findAll(req,function (err,data) {
        if(err){
            res.send(errr);
        }else{
            res.send(data);
        }
    })
};

Controller.prototype.getById=function(req,res){
    console.log(req.params.id);
    mo.findById(req.params.id,function (err,data) {
         if(err){
             res.send(errr);
         }else{
             res.send(data);
         }
    })
};
Controller.prototype.update=function(req,res){
    mo.change(req.params.id,req.body,function (err,data) {
        if(err){
            res.send(errr);
        }else{
            res.send(data);
        }
    })
};
Controller.prototype.remove=function(req,res){
    mo.delete(req.params.id,function (err,data) {
        if(err){
            res.send(errr);
        }else{
            res.send(data);
        }
    })
};

 module.exports = Controller;