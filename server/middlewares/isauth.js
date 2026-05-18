import jwt from "jsonwebtoken"


const isAuth = async (req,res,next) =>{
    try{
      let {token}= req.cookies
        if(!token){
            return res.status(400).json({message:"usr does not have a token"})

        }
        const verifyToken = jwt.verify(token,process.env.JWTSECRET)
        if(!verifyToken){
           return res.status(400).json({message:"usr does not have a valid token"})
 
        }
        req.userId =verifyToken.userId
        next()
    }
    catch(error){
         return res.status(500).json({message:`Google isauth error ${error}`})
    
    }
}
export default isAuth