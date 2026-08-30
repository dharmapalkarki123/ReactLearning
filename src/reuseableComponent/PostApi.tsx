import axios from "axios";
import { useEffect, useState } from "react";

function PostApi() {

  const [vendorList,setVendorList]=useState<VendorModel[]>([]);

 useEffect(()=>{
 getAllVendors
 },[])

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
                          <button type="button" className="btn btn-sm btn-primary me-2">
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
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Vendor Id</label>
                  <input type="number" className="form-control" placeholder="Enter vendor id" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Vendor Name</label>
                  <input type="text" className="form-control" placeholder="Enter vendor name" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Contact No</label>
                  <input type="text" className="form-control" placeholder="Enter contact number" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Id</label>
                  <input type="email" className="form-control" placeholder="Enter email id" />
                </div>

                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-success">
                    Save
                  </button>
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