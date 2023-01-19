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
    postCount: {
        type: Number,
        default: 0,
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
    active: {
        type: Boolean,
        default: true,
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ]

},{
    timestamps: true
});


//Compile the bloguser model
const BlogUser = mongoose.model('BlogUser', BlogUserSchema);

module.exports= BlogUser;