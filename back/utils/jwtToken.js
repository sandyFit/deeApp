//Create and sending a token saved in a cookie
const tokenSent= (user, statusCode, res) =>{

    //Creating a token
    const token = user.getJwtToken();

    //Token options
    const Options= {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME*24*60*60*1000
        ),
        httpOnly: true
    }

    res.status(statusCode).cookie("token", token, Options).json({
        success:true,
        token,
        user
    })
}

module.exports= tokenSent;