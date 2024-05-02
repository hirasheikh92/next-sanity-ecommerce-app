"use client"
import Container from '../shared/Container'
import { useSelector } from 'react-redux';
import { StateProps } from '@/types/type';

const Cart = () => {
    const{ productData} = useSelector((state:StateProps)=>state.eshop);
  return (
    <Container>
      {
        productData?.length > 0 ?(
        <div className='pb-20'>
            <div className="w-full h-20 bg-[#f5f7f7] text-primeColor hidden lg:grid grid-cols-5 place-content-center px-6 text-lg font-semibold">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>
        </div>
         ) :(
        <div>no products available</div>
         )
      }
    </Container>
  )
}

export default Cart
