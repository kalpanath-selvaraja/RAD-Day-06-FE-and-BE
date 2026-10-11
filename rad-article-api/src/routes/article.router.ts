import { Router } from "express"
import { upload } from "../middleWares/upload"
import { creatArticle } from "../controllers/article.controller"


const router = Router()

router.post("/create", upload.single("image"), creatArticle)

export default router
2