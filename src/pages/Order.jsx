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
        {
          products.slice(1,4).map((item,index)=>(
             <div key={index} className="py-4 border-b border-t text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-6 text-sm">
                <img src={item.image[0]} alt="" />
              </div>
             </div>
          ))
        }
      </div>
    </div>
  );
};

export default Order;
