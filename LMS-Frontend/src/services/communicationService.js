import axios from "axios";

const API="http://localhost:5000/api/communication";

export const evaluateCommunication=async(answer)=>{

const token=localStorage.getItem("token");

const res=await axios.post(API,

{answer},

{

headers:{

Authorization:`Bearer ${token}`

}

}

);

return res.data;

};