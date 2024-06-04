import axios from "axios";

export const getAllPlantsService=async()=>{
    try{
        const res=await axios.get("http://localhost:5000/api/plants");
        return res

    }catch(err){
        console.log("error",err)
    }
}
export const viewPlantsService=async(plantId)=>{
    try{
        const res=await axios.get(`http://localhost:5000/api/plants/${plantId}`);
        return res

    }catch(err){
        console.log("error",err)
    }
}