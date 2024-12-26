import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Titles from "./Titles";
import ProductItem from "./ProductItem";

function BestSeller() {
  const { products } = useContext(ShopContext);
  // console.log('Products:', products); 
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    //if best seller is true, it will be added to best products
    const bestProduct = products.filter((item) => item.bestseller);
    // console.log(bestProduct);
    setBestSeller(bestProduct.slice(0,5));
  }, [products]);

  return (
    <div className="m-10">
      <div className="text-center text-3xl py-8">
        <Titles text1={"Best"} text2={"Seller"} />
        <p className="w-3/4 m-auto sm:text-sm md:text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          facilis vero sunt ipsam corporis!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5  gap-4 gap-y-6">
    
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
