const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=process.env.PORT||4000;
const mongoose=require("mongoose")
const Content=require("./schema")

console.log(Content)
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect("mongodb+srv://pdreddy972:pd12345@cluster0.9ahscu3.mongodb.net/firstdb?retryWrites=true&w=majority")
.then(()=>{
    console.log("MongoDB is Connected..........painfully")
})
.catch((err)=>{
    console.log(err)
})
app.get("/",(req,res)=>{
    res.send("API is ..................working")
})
app.get("/users",async(req,res)=>{
    await Content.find()
    .then(found=>res.json(found))
})
app.post("/store",(req,res)=>{
    const {username,password}=req.body
    const newData= new Content ({
    username,password
    })
    newData.save()
})

app.listen(4000,()=>console.log("server started successfully"))