import { useEffect, useState } from "react";

function GetApi(){

  const [userList,setUserList]=useState<UserModel[]>([]);


  useEffect(()=>{
    getAllUsers();

  },[])

  const getAllUsers= async()=>{
   
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
    const userList=await response.json();
    setUserList(userList);



  }

 return<div>
  <h1>Get Api Example</h1>
  <div className="row">
    <div className="col-6">
      <ul>
        {userList.map((user:UserModel)=>{
          return<li>{user.name}-{user.email}</li>})
        }
      </ul>
    </div>
  </div>

 </div>

}
export default GetApi;

  export interface UserModel {
  id: number
  name: string
  username: string
  email: string
  address: any
  phone: string
  website: string
  company: any
}