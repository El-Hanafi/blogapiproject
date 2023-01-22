const mongoose = require('mongoose');

//create schema
const BlogUserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'First name is required']
    },

    lastname: {
        type: String,
    },
    profilePhoto: {
        type: String,

    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password name is required']
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    role:{
        type:String,
        enum:['Admin','Guest','Editor']
    },
    viewedBy:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
],
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    blocked: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    plan:[
        {
        type: String,
        enum: ['Free','Premium', 'Pro'],
        default: 'Free',
        },
    ],
    
    userAward: {
        type: String,
        enum: ['Bronze', 'Silver', 'Gold'],
        default: 'Bronze',
    },


},{
    timestamps: true
});


//Compile the bloguser model
const BlogUser = mongoose.model('BlogUser', BlogUserSchema);

module.exports= BlogUser;