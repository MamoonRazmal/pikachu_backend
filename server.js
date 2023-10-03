const express=require("express")
let Data=require('./pokimon.json')
const app=express();
const api=require("./routes/pokimon")
app.use(express.urlencoded({extended:true}))
require("dotenv").config();
const cors=require('cors')
app.use(express.json());
app.get("/pokimon",(req,res)=>{
    res.status(202).json(Data)
})
app.use("/api/",api)
app.get("/pokimon/:id",(req,res)=>{
  // res.status(202).json(Data[2].id)
     const {id}=req.params;
//   res.status(202).json(Data.filter((x)=>{
//      return x=id
//    }
   
  // ))
  for(let a=0;a<Data.length;a++){
    if(Data[a].id==id){
        res.status(202).json(Data[a])
    }
  }
})
app.get("/pokimon/:id/:info",(req,res)=>{
    const{id,info}=req.params
    for(let a=0;a<Data.length;a++){
        if(Data[a].id==id){
            res.status(202).json(Data[a].base)
        }
      }
})
app.get("/pokimon/id/type",(req,res)=>{
    const{id,type}=req.params
    for(let b=0;b<Data.length;b++){
        if(Data[b].id==id){
            res.status(202).json(Data[b].name)
        }
      }
})

const PORT=process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})  