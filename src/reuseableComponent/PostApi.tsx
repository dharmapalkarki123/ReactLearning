import axios from "axios";
import { useEffect, useState } from "react";

function PostApi() {

  const [vendorList,setVendorList]=useState<VendorModel[]>([]);
  const [vendorObj,setVendorObj]=useState<VendorModel>({
    vendorId:0,
    vendorName:"",
    contactNo:"",
    emailId:""
  })

 useEffect(()=>{
 getAllVendors()
 },[])

  const onEdit=(item:VendorModel)=>{

    setVendorObj(item);



  }

 const updateVendorName=(event:any)=>{
  setVendorObj(oldObj=>({...oldObj,vendorName:event.target.value}))

 }

 const postVendorData=async()=>{
  debugger
    const response=await axios.post("https://api.freeprojectapi.com/api/BusBooking/PostBusVendor", vendorObj)
    debugger
    if(response.status==201){
      alert("Vendor added successfully")
      getAllVendors();
    }else{
      alert("API failed to add vendor")
    }

 }

  const updateVendorContactNo=(event:any)=>{
  setVendorObj(oldObj=>({...oldObj,contactNo:event.target.value}))

 }

  const updateVendorForm=(event:any,key:string)=>{
  setVendorObj(oldObj=>({...oldObj,[key]:event.target.value}))

 }

  const getAllVendors=async()=>{
    const result=await axios.get("https://api.freeprojectapi.com/api/BusBooking/GetBusVendors");
    setVendorList(result.data);
  }


  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-7">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-warning text-dark fw-bold">
              Vendor List
            </div>
            <div className="card-body p-0">
              <table className="table table-bordered table-hover mb-0">
                <thead className="table-light">
                  <tr>
                   
                    <th>Vendor Name</th>
                    <th>Contact No</th>
                    <th>Email Id</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{
                  
                 vendorList.map((vendor:VendorModel)=>{
                      return<tr>
                        <td>{vendor.vendorName}</td>
                        <td>{vendor.contactNo}</td>
                        <td>{vendor.emailId}</td>
                        <tr>
                          <button type="button" className="btn btn-sm btn-primary me-2" onClick={()=>onEdit(vendor)}>
                        Edit
                      </button>
                      <button type="button" className="btn btn-sm btn-danger">
                        Delete
                      </button>
                        </tr>
                      </tr>
})
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-5">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-warning text-dark fw-bold">
              Vendor Form
            </div>
            vendorId-{vendorObj.vendorId}  vendorname-{vendorObj.vendorName} --MobileNo-{vendorObj.contactNo}EmailId-{vendorObj.emailId}
            <div className="card-body">
              <form>
              <div className="mb-3">
                  <label className="form-label">Vendor Name</label>
                  <input type="text" value={vendorObj.vendorName} className="form-control" onChange={(eve)=>updateVendorForm(eve,'vendorName')} placeholder="Enter vendor name" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Contact No</label>
                  <input type="text" value={vendorObj.contactNo} className="form-control" onChange={(eve)=>updateVendorForm(eve,'contactNo')} placeholder="Enter contact number" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Id</label>
                  <input type="email" value={vendorObj.emailId} className="form-control" onChange={(eve)=>updateVendorForm(eve,'emailId')} placeholder="Enter email id" />
                </div>

                <div className="d-flex gap-2">

                  {vendorObj.vendorId==0 && <button type="button" onClick={postVendorData} className="btn btn-warning">
                    Save

                  </button> }
                  {

                    vendorObj.vendorId!=0 && <button type="button" onClick={postVendorData} className="btn btn-success">
                    Update
                  </button>
                  }
                 
                  <button type="button" className="btn btn-secondary">
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostApi;

export interface VendorModel {

    vendorId: number
    vendorName: string,
    contactNo:string
   emailId: string



}