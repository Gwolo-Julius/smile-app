import React, { useContext } from "react";
import { ShopContext } from "../context/ShopConext";
import Title from "../components/Title";

const Order = () => {
  const { currency, products } = useContext(ShopContext);
  return (
    <div className="border-t pt-16">
      <div className="">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div className="">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-b border-t text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">{currency}{item.price}</p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2">Date: <span className="text-gray-400">25 Jan, 2025</span></p>
              </div>
            </div>
            <div className="flex justify-between md:w-1/2">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Ready to Ship</p>
              </div>
              <button className="border py-2 px-4 hover:bg-orange-500 text-sm font-medium rounded-md hover:text-white transition-all duration-300">Track Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
