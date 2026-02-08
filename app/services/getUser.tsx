import axios from "axios";
import { cookies } from "next/headers";

export async function getUser() {
    try {
      // ✅ Get the TOKEN STRING, not the cookie object
      const tokenCookie = (await cookies()).get("token");
      const token = tokenCookie?.value; // ← THIS IS THE KEY FIX
  
      if (!token) {
        console.log("No token found in cookies");
        return null;
      }
  
      const res = await axios.get("http://localhost:3000/api/users/currentuser", {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ Now it's a real JWT string
        },
      });
  console.log(res.data.data.name)
      return res.data.data;
    } catch (error: any) {
      console.error("Failed to fetch user:", error.response?.data || error.message);
      return null;
    }
  }