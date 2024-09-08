const adminLogin = require("../model/functions/adminLogin")
const getAllUsers = require("../model/functions/getAllUsers")

const postAdminLogin = async (req,res)=>{
    console.log(req.body)
    const {email,password} = req.body
    const result =  await adminLogin(email,password)
    const user =await getAllUsers()
    console.log(user)
    if(result.result){
        res.render('adminHomePage',{user})
    }
    else {
        res.render('adminLogin',{message:result.message})
    }
    
}


module.exports = postAdminLogin