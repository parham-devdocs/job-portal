import { headers } from "next/headers";


async function usePathname() {
    const headersList =await headers();
    const pathname = headersList.get('x-current-path') || '/'; 
    return pathname
}