const mongoose=require("mongoose")
const studySchema=new mongoose.Schema(
    {
        subject:String,
        duration:String,
        modules:String,
        revision:String,
        status:String
    }
)
module.exports=mongoose.model("study",studySchema)
