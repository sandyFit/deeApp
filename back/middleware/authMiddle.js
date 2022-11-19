const User = require('../models/authModel')
const jwt = require('jsonwebtoken') // generador de tokens
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')

//Verifying authentication (if token exists)
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const {token} = req.cookies

    // If token doesn't exist or the cookie didn't bring one
    if(!token){
        return next(new ErrorHandler("You need to sign in or sign up before continuing", 401))
    }

    //Decoding the token to verify it matches the secret word
    const decodingToken = jwt.decode(token, process.env.JWT_SECRET)
    
    req.user = await User.findById(decodingToken.id);

    next()

})

//Getting the role
exports.authorizeRoles= (...roles) =>{
    return (req, res, next)=>{
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(`Rol (${req.user.role}) access NOT authorized`,403))
        }
        next()
    }
}
