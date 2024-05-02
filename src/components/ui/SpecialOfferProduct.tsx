import { ProductProps } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlForImage } from "../../../sanity/lib/image";
import Price from "../shared/Price";

interface Props {
  products: ProductProps[];
}

const SpecialOfferProduct = ({ products }: Props) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 underline underline-offset-4  decoration-[1px]">
        Products on Sale
      </h3>
      <div className="flex flex-col  gap-2 justify-start ">
        {products.map((item: ProductProps) => (
          <Link href={`product/${item?.slug?.current}`}
          className="flex gap-4 border-b-[1px] border-b-gray-300 py-2">
            <Image
              src={urlForImage(item?.image)}
              alt={"product image"}
              width={200}
              height={200}
              className="w-24 object-contain "
            />
            <div className="flex flex-col gap-2">
              <p className="text-sm tracking-tighter font-medium">
                {item?.title.substring(0, 8)}
              </p>
              <p className="text-sm font-semibold">
                <Price amount={item?.price} />
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialOfferProduct;
