import { useEffect, useState } from "react";

function GetApi(){

  const [userList,setUserList]=useState<UserModel[]>([]);


  const [vendorList,setVendorList]=useState<VendorModel[]>([]);

  useEffect(()=>{
    debugger
    getAllUsers();

    getAllVendors();

  },[])

  const getAllUsers= async()=>{
    debugger
   
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
    const userList=await response.json();
    setUserList(userList);






  }


  


  const getAllVendors=async()=>{
    const response =await fetch("https://api.freeprojectapi.com/api/BusBooking/GetBusVendors");
    const vendorList=await response.json();
    setVendorList(vendorList);
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
    <div className="col-6">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Vendor Name</th>
            <th>Contact No</th>
            <th>Email Id</th>
          </tr>
        </thead>
        <tbody>
          {
vendorList.map((vendor:VendorModel)=>{
  return<tr>
    <td>{vendor.vendorName}</td>
    <td>{vendor.contactNo}</td>
    <td>{vendor.emailId}</td>
  </tr>
})
          }
        </tbody>
      </table>
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

export interface VendorModel {

  vendorName: string,
    contactNo: string,
    emailId: string
}