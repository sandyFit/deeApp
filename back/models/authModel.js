const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt= require('jsonwebtoken')
const crypto = require('crypto')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please, enter your name"],
        maxlength: [120, "Maximum length of characters allowed is 120"]
    },
    email: {
        type: String,
        required: [true, "Please, enter your email address"],
        unique: true,
        validate: [validator.isEmail, "Please, enter a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minlength: [8, "Your password must be at least 8 characters"],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: 'user'
    },
    registrationDate: {
        type: Date,
        default: Date.now
    },
    // Token's expiration date
    resetPasswordToken: String,
    resetPasswordExpire: Date
    
})

//Encrypt password before sending
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

//Decoding passwords to compare them
userSchema.methods.comparePass = async function (passDada){
    return await bcrypt.compare(passDada, this.password)
}

//Returning a JWT token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    })
}


module.exports = mongoose.model('auth', userSchema)