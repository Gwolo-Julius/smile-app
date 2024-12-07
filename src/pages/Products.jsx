import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopConext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Products = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

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
            <p className="pl-2">(225)</p>
          </div>
          <p className="mt-5 font-medium text-2xl">
            {currency}
            {productData.price}
          </p>
          <p className="text-gray-500 mt-5 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`py-2 px-4 bg-gray-100 rounded border ${
                    item === size
                      ? "border-orange-500 text-orange-600 bg-orange-100"
                      : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              onClick={() => addToCart(productData._id, size)}
              className="bg-orange-500 text-white py-3 px-4 rounded border-none w-2/5 hover:bg-orange-400 active:bg-orange-600 text-sm font-bold"
            >
              ADD TO CART
            </button>
            <hr className="mt-8 sm:w-4/5 " />
            <div className="text-gray-500 flex flex-col mt-3 gap-1 ">
              <p>100% Original</p>
              <p>Cash on Delivery is available on this product</p>
              <p>Easy return and exchange policy within 7 days</p>
            </div>
          </div>
        </div>
        {/* @@@@@@@@@ Description and Review @@@@@@@@@@@@ */}
      </div>
      <div className="mt-20">
        <div className="flex mb-2">
          <b className="border px-5 py-3 text-sm bg-gray-50">Description</b>
          <p className="border px-5 py-3 text-sm bg-gray-50">Review (122)</p>
        </div>
        <div className="flex flex-col gap-4 border p-6 text-sm text-gray-400">
          <p>
            An E-commerce is an online platform that facilitate the buying and
            selling of goods to customers easily. It serves as a virtual market
            place where businesses and individuals can showcase their products,
            intereact with customers and conduct transactions without the need
            for physical presence. E-commerce website have gained popularity due
            to their convience, accessiblity and global reach they offer.
          </p>
          <p>
            E-Commerce typically displays products or along with detailed
            Description including prices for customers to select what they are
            interested to buy without worrying of spending on transportation,
            and stress during the process of the transaction.
          </p>
        </div>
      </div>
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Products;
