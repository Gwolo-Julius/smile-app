import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopConext";
import { assets } from "../assets/assets";

const Products = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);
  return productData ? (
    <div className="border-t-2 transition-opacity pt-10 ease-in duration-500 opacity-100">
      {/* product Date */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col  overflow-x-auto sm:overflow-y-scroll sm:justify-normal justify-between sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                className="w-[24%] sm:w-full  sm:mb-3 flex-shrink-0 cursor-pointer"
                src={item}
                key={index}
                onClick={() => setImage(item)}
                alt=""
                border
              />
            ))}
          </div>
          <div className="w-full  sm:w-[80%]">
            <img className="w-full  object-cover" src={image} alt="" />
          </div>
        </div>
        {/* @@@@@@@ product Description @@@@@@@ */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img className="w-5" src={assets.star_icon} alt="" />
            <img className="w-5" src={assets.star_icon} alt="" />
            <img className="w-5" src={assets.star_icon} alt="" />
            <img className="w-5" src={assets.star_icon} alt="" />
            <img className="w-5" src={assets.star_dull_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Products;
