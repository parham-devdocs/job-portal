"use client"

import axios from "axios";

export async  function logout() {
    try {
     
      const res = await axios.post("http://localhost:3000/api/users/logout", {
       withCredentials:true
      });

  
    } catch (error: any) {
      console.error("Failed to log out:", error.response?.data.message || error.message);
      return null;
    }
  }