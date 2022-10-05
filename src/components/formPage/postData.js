import axios from "axios";
import toast from "react-hot-toast";

export const postData=async(formData,inputFieldData,urlParameters)=>{
    const data={...formData,parameters:inputFieldData,urlParameter:urlParameters}
try{
    await axios.post(" https://eo5o8y4opus393f.m.pipedream.net/webhook_72ha8",
   {
    headers: {
    'Hello': 'try to implement post request',
    'Content-Type': `${formData.contentType}`
  },
  data:data
}).then(response=>{
    console.log(JSON.stringify(response.data));
    toast("request done successfully",{icon:"✔"});
})      
}
catch{
    console.error('could not perform the request');
}

}