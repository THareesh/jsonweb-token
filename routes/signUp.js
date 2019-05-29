var express = require('express'),
 router =express.Router();
 Controller = require('./../controllers/signUpcontroller');
 sc= new Controller;
 //router.get('/',sc.getAll.bind(sc));//
 //router.post('/',sc.post.bind(sc));//
router.get('/',sc.getAll.bind(sc));
router.get('/:id',sc.getById.bind(sc));
router.post('/',sc.post.bind(sc));
router.put('/:id',sc.update.bind(sc));
router.delete('/:id',sc.remove.bind(sc));
module.exports= router;

 
