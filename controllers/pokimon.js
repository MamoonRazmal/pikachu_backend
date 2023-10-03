let Data=require('../pokimon.json')
const getAllPokimon=async(req,res)=>{
    res.status(200).json(Data) 
}
const getOnlyById=async (req,res)=>{
    const {id}=req.params;

  for(let a=0;a<Data.length;a++){
    if(Data[a].id==id){
        res.status(200).json(Data[a])
    }
  }  
}
const getExtraInfo=async (req,res)=>{
    const{id,info}=req.params
    for(let a=0;a<Data.length;a++){
        if(Data[a].id==id){
            res.status(200).json(Data[a].base)
        }
      }
}
module.exports={
    getExtraInfo,
    getOnlyById,
    getAllPokimon,
}