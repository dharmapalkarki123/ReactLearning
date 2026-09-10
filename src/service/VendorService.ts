import axios from "axios"
import type {VendorModel} from "../reuseableComponent/PostApi";

export const VendorService={


 

   getAllVendors: async () => {
    debugger
    const result = await axios.get("https://api.freeprojectapi.com/api/BusBooking/GetBusVendors");
    return result.data;
  },

  createNewVendor: async (obj: VendorModel) => {
    debugger
    const result = await axios.post("https://api.freeprojectapi.com/api/BusBooking/AddBusVendor",obj);
    return result;
  }




}