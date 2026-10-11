import { Router } from "express"
import {getMyDetails, getRefreshToken, login, register} from "../controllers/auth.controller"
import {authenticate} from "../middleWares/auth";

const router = Router()


//public
router.post("/login", login)
router.post("/register", register)
router.post("/refresh", getRefreshToken)


//protected
router.get("/me", authenticate,getMyDetails)


export default router
