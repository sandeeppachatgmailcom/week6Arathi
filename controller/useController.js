const userCollection = require("../model/collections/user")
const bcrypt = require('bcrypt')

const getRoot = (req, res) => {
    res.render('login',{message:''})
}
const getSignup = (req, res) => {
    console.log('first')
    res.render('signupPage', { message: '' })
}
const getSignIn = (req, res) => {
    res.redirect('/')
}

const postCreateUser = async (req, res) => {
    const { email, password, username } = req.body;
    try {
        const hashedpassword = await bcrypt.hash(password,10)
        const newUser = new userCollection({
            name: username,
            email: email,
            password: hashedpassword
        });
        const result = await newUser.save();
        if(result) res.redirect('/');
    } catch (error) {
        console.error('Error creating user:', error);

        if (error.code === 11000) {
            res.status(400).render('signupPage', { message: 'Email already exist' });
        } else {
            res.status(500).send('An error occurred while creating the user');
        }
    }
};


module.exports = { getRoot, getSignup, getSignIn, postCreateUser }