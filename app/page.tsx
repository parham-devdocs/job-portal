
import axios from "axios";

import { cookies } from "next/headers";
import { getUser } from "./services/getUser";


export  default async function Home() {
  const user=await getUser()
  return (
 <div>
 <h1>{user&& user.name}</h1>
 </div>
  );
}
