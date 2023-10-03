const express=require("express")
const{
    getExtraInfo,
    getOnlyById,
    getAllPokimon,
}=require("../controllers/pokimon")
const api=express.Router();
api.route("/pokimonall").get(getAllPokimon)
api.route("/pokimon/:id").get(getOnlyById)
api.route("/pokimon/:id/info").get(getExtraInfo)
module.exports=api