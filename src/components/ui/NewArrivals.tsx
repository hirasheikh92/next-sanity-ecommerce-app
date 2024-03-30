"use client"
import { ProductProps } from '@/types/type'
import Container from '../shared/Container'
import Product from '../shared/Product'
import Slider from "react-slick";
import NextArrow from '../shared/NextArrow';
import PrevArrow from '../shared/PrevArrow';
interface Porps{
    products:ProductProps[]
}


const NewArrivals = ({products}:Porps) => {
    // console.log(products)
  const settings={
    infinite:true,
    speed:500,
    slidesToShow:4,
    slidesToScroll:1,
    autoplay:true,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
    responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]

  }
  return (
    <>
    <Container className="-mt-60 ">
        <div>
            <Slider {...settings}>
            {
                products?.map((item:ProductProps)=>(
                    <div key={item?._id} className='px-2'>
                        <Product product={item} />
                        </div>

                ))
            }
            </Slider>
        </div>
    </Container>
    </>
  )
}

export default NewArrivals
