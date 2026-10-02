import {NextFunction, Response , Request} from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

export interface AuthRequest extends Request {
    user?:any
}

export const authenticate =  (
    // req: Request,
    req: AuthRequest,
    res: Response,
    next:NextFunction
) => {

    const authHeader = req.headers.authorization
    if(!authHeader){
        return res.status(401).json({message:"No Token"})
    }

    const token = authHeader.split(' ')[1]
    try{

       const payload =  jwt.verify(token, JWT_SECRET)
        req.user = payload
        next()


    }catch(err){
        console.error(err)
        res.status(401).json({message:"Invalid token or Expired"})

    }

}