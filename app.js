const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const studyRouter=require("./controllers/studyRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://vidhya_14:vidhya_14@cluster0.u7pxfo8.mongodb.net/studyDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/study",studyRouter)


app.listen(3001,()=>{
    console.log("server running")
})