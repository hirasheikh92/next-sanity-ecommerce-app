"use client"
import { ProductProps } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlForImage } from "../../../sanity/lib/image";
import { AiOutlineShopping } from "react-icons/ai";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/eshopSlice";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  product: ProductProps;
  bg?:String
}

const Product = ({ product,bg }: Props) => {
  const dispatch = useDispatch()
  // // console.log(product.slug.current)
  return (
    <>
      <div className="w-full relative group border-[1px] border-black hover:shad duration-200 shadow-gray-500 rounded-md overflow-hidden group">
        <div className="w-full h-full overflow-hidden bg-white flex items-center justify-center">
          <div className={ `relative ${bg}`}>
            <Link href={`/product/${product?.slug?.current}`}>
              <Image
                src={urlForImage(product?.image)}
                alt={"product image"}
                width={700}
                height={700}
                className=" w-72 h-72 object-contain"
              />
            </Link>
            <div className="absolute bottom-0 flex items-center gap-5 justify-center translate-y-[110%] group-hover:-translate-y-2 transition-transform duration-300">
              <button
                onClick={()=>{dispatch(addToCart(product));toast.success(`${product?.title.substring(0,12)}...added to cart`)}}
                className="bg-gray-800 text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200 "
              >
                <span>
                  <AiOutlineShopping />
                </span>
                Add to bag
              </button>
              <Link
                href={`/product/${product?.slug?.current}`}
                className="bg-gray-800 text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200 "
              >
                <span>
                  <BsArrowsFullscreen />
                </span>
                Quick View
              </Link>
            </div>
          </div>
          {product?.isnew && (
            <div className="absolute top-2 right-2">
              <p className="bg-primeColor px-4 py-1 text-white flex justify-center items-center text-sm font-semibold hover:bg-black duration-300 cursor-pointer rounded-md">
                New
              </p>
            </div>
          )}
        </div>
        <div className="max-w-80 py-6 flex flex-col gap-1 px-4">
          <div className="flex items-center justify-between ">
            <h2 className="text-lg text-primeColor font-bold">
              {product?.title.substring(0, 15)}
            </h2>
            <div className=" flex items-center gap-2">
              <p className="text-[#767676] text-xs line-through">
                ${product?.rowprice}
              </p>
              <p className="font-semibold">${product?.price}</p>
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <p className="text-[#767676] text-sm">
              a product by{" "}
              <span className="font-semibold text-pretty">
                {product?.brand}
              </span>
            </p>
            <div className="flex items-center gap-1 ">
              <MdOutlineStarBorderPurple500 className="text-lg text-yellow-500" />
              <span className="font-medium text-sm"> {product?.ratings}</span>
            </div>
          </div>
        </div>
        <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
          },
        }}
      />
      </div>
    </>
  );
};

export default Product;
