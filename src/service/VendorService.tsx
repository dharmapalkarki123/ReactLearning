import axios from "axios"
import type {VendorModel} from "../reuseableComponent/PostApi";
import { apiUrl } from "./axiosinstances";

export const VendorService={


 



    getAllVendors: async () => {
    debugger
    const result = await apiUrl.get("/GetBusVendors");
    return result.data;
  },

  createNewVendors: async (obj: VendorModel) => {
    debugger
    const result = await apiUrl.post("/PostBusVendor",obj);
    return result;
  }




}