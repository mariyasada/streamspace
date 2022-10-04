import { v4 as uuidv4 } from "uuid";
export const contentType=[
                  "application/json",
                  "application / x - www - form - urlencoded",
                  "multipart/form-data",
                ];

export const fieldOfForm=[
    {
     name:"First_name",
     dataOf:["Mariya","Riya","Maya"]
},
{
    name:"Last_name",
    dataOf:["Sada","Soni","Solanki"]
},{
    name:"User_email",
    dataOf:["mariyasada06@gmail.com","maya@gmail.com","riyasoni@gmail.com"]
},
{
 name:"Username",
 dataOf:["Rima","Riya","Maya"]
}
]       

export const fieldData=["Maya","Riya","Singhaniya","soni","maya6@gmail.com","riya@gmail.com","maya123","riya123"];

export const initialData={id:uuidv4(), status:"",url:"",contentType:""};