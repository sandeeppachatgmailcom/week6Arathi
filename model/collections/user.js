const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin:{type:Boolean,required:true,default:false}
    }
);

// Create the User model from the schema
const userCollection = mongoose.model('User', userSchema);

module.exports = userCollection;
