const express = require('express')
const getRoot = require('../controller/getRoot') 
const router = express.Router() 
const PostSignIn = require('../model/functions/postSignin')
const getAdmin = require("../controller/getAdmin")
const getLogout = require('../controller/getLogout')
const getAdminPage = require("../controller/getAdminPage")
const postAdminLogin = require("../controller/postAdminLogin")
const getAdminLogout = require("../controller/getAdminLogout")
const postCreateUser = require("../controller/postCreateUser")
const getSignIn = require("../controller/getSignIn")
const getSignup = require("../controller/getSignUp")

router.get('/',getRoot)
router.get('/signup',getSignup)
router.get('/signin',getSignIn)
router.post('/createUser',postCreateUser )
router.post('/signin',PostSignIn)
router.get('/admin',getAdmin)
router.post('/adminlogin',postAdminLogin)
router.get('/adminlogout', getAdminLogout);
router.get('/logout',getLogout)
router.get('/adminPage',getAdminPage)


module.exports = router