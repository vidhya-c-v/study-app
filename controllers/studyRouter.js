const express=require("express")
const studyModel=require("../models/studyModel")
const router=express.Router()
router.post("/add",async(req,res)=>{
    let data=req.body
    let covid=new studyModel(data)
    let result=await covid.save()
    res.json({
        status:"success"
    })
})




module.exports=router