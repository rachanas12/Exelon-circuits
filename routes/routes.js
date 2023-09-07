const Router=require("express").Router()
const multer=require("multer")
const storage=require("../middlewares/multer")
const {getLists,postFile, deleteFile } = require("../controllers/logics")
const upload = multer({ storage });


Router.get("/lists",getLists)

Router.delete("/delete/:id",deleteFile)
Router.post("/uploadfile",upload.single('file'),postFile)

module.exports=Router