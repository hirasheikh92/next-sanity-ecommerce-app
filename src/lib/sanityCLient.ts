import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";


export const productQuery =groq`*[_type == 'products']{
    ...
  } | order(_createdAt desc)`;
  
  
  export const products = async()=>{
    const productsData = await client.fetch(productQuery);
    return productsData;
  }