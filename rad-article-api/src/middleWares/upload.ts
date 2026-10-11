import multer from "multer"

// multer .diskstorage
const storage = multer.memoryStorage()

export const upload = multer({
    storage
})