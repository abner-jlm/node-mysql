var express = require('express');
var router = express.Router();
var userController = require('../controllers/user')
const fileupLoad = require('../middleware/fileupload')

const resApplicationJson = (req,res,next)=>{
    res.set('content-type','appliction/json; charset=utf8')
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next()
}
router.use(resApplicationJson)
router.get('/userinfo',userController.userInfo);
router.post('/register',userController.register);
router.post('/login',userController.login);
router.post('/head',fileupLoad,userController.head);

module.exports = router;
