"use client"
import axios from "axios";

export async  function getCurrentUser() {
    try {
     
  
      const res = await axios.get("http://localhost:3000/api/users/currentuser", {
       withCredentials:true
      });
  console.log(res.data.data.name)
      return res.data.data;
    } catch (error: any) {
      console.error("Failed to fetch user:", error.response?.data || error.message);
      return null;
    }
  }