const userCollection = require('../collections/user')



async function createUser({username,email,password}){
    try {  
        const newUser = new userCollection({
            name: username,
            email: email,
            password: password
        });
        return await newUser.save();
       
    } catch (error) {
        console.error('Error creating user:', error);
        if (error.code === 11000) {
            res.status(400).send('Email already exists');
        } else {
            res.status(500).send('An error occurred while creating the user');
        }
    }
}
module.exports = createUser