import { ProductProps } from '@/types/type'
import React from 'react'
import Container from '../shared/Container'
import Heading from '../shared/Heading'
import Products from '../../../sanity/schemas/products';import Product from '../shared/Product';

interface Props{
    products:ProductProps[];
    title:string;
}


const BestSellers = ({products,title}:Props) => {
  return (
    <Container className="w-full pb-20">
        <Heading heading={title}></Heading>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 '>
            {
                products.map((item:ProductProps)=>(
                    <Product key={item?._id}
                    product={item} 
                    bg="#FFFFFF20"
                   
                    />
                ))
            }
        </div>
    </Container>
  )
}

export default BestSellers
