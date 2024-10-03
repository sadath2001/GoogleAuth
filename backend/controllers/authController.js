const usermodel = require("../models/userModel");
const { oauth2client } = require("../utils/googleConfig");
const axios=require('axios')
const jwt=require('jsonwebtoken')

//for getting google auth API
exports.googleAuth =async (req,res, next)=>{
    const code = req.query.code;
    try {
        // google called to get a google response
        const googleResponse=await oauth2client.getToken(code);
        oauth2client.setCredentials(googleResponse.tokens)

        // gives user info
        const userResponse=await axios.get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleResponse.tokens.access_token}`

        )
        const {email,name,image}=userResponse.data;
        let user=await usermodel.findOne({email});
        if(!user)
        {
            user=await usermodel.create({
              name, email, image

            })
        }
        const {_id}=user;
        const token=jwt.sign({_id,email},process.env.JWT_SECRET,
            {
                expiresIn:process.env.JWT_TIMEOUT
            }
        );
        return res.status(200).json({
            message:"Success", token, user
        })

    } catch (error) {
        return res.status(500).json({
            message:"Internal server error occured"
        })
    }
}

