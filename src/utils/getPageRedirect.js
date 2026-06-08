// utils/getPageRedirect.js

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { BASE_URL } from "@/config/config";

export default async function getPageRedirect(slug) {
   const headersList = await headers();

    const host = headersList.get('host');
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

    const fullUrl = `${protocol}://${host}/${slug}`;
    
    const res = await fetch(`${BASE_URL}redirection/${fullUrl}`, {
      cache: "no-store",
    });


    if (res.ok) {
      const data = await res.json();
      if (data?.status && data.data) {
        return(data.data);
      }
    }
}