const User = require('../models/authModel')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const tokenSent = require('../utils/jwtToken')
// const sendEmail = require('../utils/sendEmail')
// const crypto = require('crypto')


//Register a new user /api/user/register
exports.registerUser = catchAsyncErrors(async (req, res, next) =>{
    const {name, email, password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"ANd9GcQKZwmqodcPdQUDRt6E5cPERZDWaqy6ITohlQ&usqp",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZwmqodcPdQUDRt6E5cPERZDWaqy6ITohlQ&usqp=CAU"
        }
    })

    tokenSent(user, 201, res)
})


//Sign in - Login
exports.loginUser = catchAsyncErrors(async(req, res, next)=>{
    const { email, password} =  req.body;

    //Check all inputs are filled
    if (!email || !password){
        return next(new ErrorHandler("Please enter email & password", 400))
    }

    //Fetch user in our database
    const user = await User.findOne({email}).select("+password")
    if(!user){
        return next(new ErrorHandler("Invalid email or password", 401))
    }

    //Comparing passwords
    const passwordOK= await user.comparePass(password);

    if (!passwordOK){
        return next(new ErrorHandler("Wrong password",401))
    }

    tokenSent(user, 200, res)

})

//Logout
exports.logOut = catchAsyncErrors(async (req, res, next) => {
    // find what's in the token and clean it up
    res.cookie("token",null, {
         expires: new Date(Date.now()),
         httpOnly: true
    })

    res.status(200).json({
        success:true,
        message: "You've been logged out"
    })
})
