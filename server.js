const express=require("express")
const mongoose=require("mongoose")
const Router = require("./routes/routes")
const cors=require("cors")
const app=express()

async function db(){
    await mongoose.connect("mongodb://127.0.0.1:27017/ExelonDB")
    console.log("db connected");
}
db()
app.use(cors())
app.use(express.static("public"))
app.use(express.json())
app.use("/",Router)

app.listen(5000,()=>{
    console.log("server is running on port 5000");
})