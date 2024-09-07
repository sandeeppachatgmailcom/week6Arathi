const express = require('express')
const router = require('./router/mainRouter')
const  mongoose   = require('./model/mongoose')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express()
app.use(session({
    secret: 'your-secret-key', 
    resave: false, 
    saveUninitialized: true,
    cookie: { secure: false }
  }));
app.use(cookieParser());
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

app.use('/',router)

app.listen(4000,()=>{
    console.log('server  listening on 4000')
})