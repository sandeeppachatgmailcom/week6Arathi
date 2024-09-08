const express = require('express')
const { getRoot, getSignup, getSignIn, postCreateUser } = require('../controller/useController') 
const router = express.Router() 
const PostSignIn = require('../model/functions/postSignin')


router.get('/',getRoot)
router.get('/signup',getSignup)
router.get('/signin',getSignIn)
router.post('/createUser',postCreateUser )
router.post('/signin',PostSignIn)
router.get('/logout',async(req,res)=>{
    res.render('login',{message:'Logout successfull'}) 
})
router.get('/adminPage',(req,res)=>{
    res.render('adminPage')
})
router.get('/admin',(req,res)=>{
    res.render('adminLogin')
})

module.exports = router