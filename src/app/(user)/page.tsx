
import Banner from '@/components/ui/Banner'
import React from 'react'
import { client } from '../../../sanity/lib/client'
import { groq } from 'next-sanity'
import NewArrivals from '@/components/ui/NewArrivals';
import BestSellers from '@/components/ui/BestSellers';


export const revalidate = 10;

const bannerQuery = groq`*[_type == "banner"]{
  image,
    _id
}| order(_createdAT asc)`

const newArrivalQuery = groq`*[_type == "products" && position == 'New Arrivals']{
  ...,
}| order(_createdAT asc)`
const bestSellerQuery = groq`*[_type == "products" && position == 'Best Sellers']{
  ...,
}| order(_createdAT asc)`


const HomePage = async() => {
  const banners:any = await client.fetch(bannerQuery)
  const newArrivalProducts = await client.fetch(newArrivalQuery);
  const bestSellerProducts = await client.fetch(bestSellerQuery);
  return (
    <main className="text-sm overflow-hidden min-h-screen">
      <Banner banners={banners}/>
      <NewArrivals products={newArrivalProducts}/>
      <BestSellers products={bestSellerProducts} title ="Our Best Sellers"/>
    </main>
  )
}

export default HomePage
