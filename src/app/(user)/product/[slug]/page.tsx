import Container from "@/components/shared/Container";
import { groq } from "next-sanity";
import { client } from "../../../../../sanity/lib/client";
import SpecialOfferProduct from "@/components/ui/SpecialOfferProduct";
import Image from "next/image";
import { urlForImage } from "../../../../../sanity/lib/image";
import { ProductProps } from "@/types/type";
import ProductInfo from "@/components/ui/ProductInfo";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/components/ui/RichText";

interface Props {
  params: {
    slug: String;
  };
}

const specialOffersQuery = groq`*[_type == "products" && position == 'Special Offers']{
    ...,
  }| order(_createdAT asc)`;

export const generateStaticParams = async () => {
  const query = groq`
    *[_type == 'products']{
        slug
    }`;

  const slugs: any = await client.fetch(query);
  const slugRoutes = slugs.map((slug: any) => slug?.slug?.current);
  return slugRoutes?.map((slug: String) => ({
    slug,
  }));
};

const page = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == "products" && slug.current == $slug][0]{
    ..., 
 }`;
  const product: ProductProps = await client.fetch(query, { slug });
  const specialOffersProducts = await client.fetch(specialOffersQuery);
  // console.log(product);

  return (
    <Container className="my-10  ">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 bg-gray-100 p-4">
        <div className=" w-72">
          <SpecialOfferProduct products={specialOffersProducts} />
        </div>
        <div className="h-full xl:col-span-2">
          <Image
            src={urlForImage(product?.image)}
            alt={""}
            className="w-full h-full object-contain"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
          <ProductInfo product={product} />
        </div>
        
      </div>
      {/* <PortableText value={product?.body}components={RichText}  /> */}
    </Container>
  );
};

export default page;
