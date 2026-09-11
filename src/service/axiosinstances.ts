import axios from "axios";

export const apiUrl=axios.create({
  baseURL:"https://api.freeprojectapi.com/api/BusBooking",
})