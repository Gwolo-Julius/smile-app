import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopConext";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Cart = () => {
  const { products, cartItems, currency, updateQuantity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    console.log(tempData);
    setCartData(tempData);
  }, [cartItems]);
  return (
    <div className="border-t pt-14">
      <div className="text-center text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="py-4 border-b text-gray-700 gap-4 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-col-[4fr_2fr_0.5fr] items-center"
            >
              <div className="flex items-center gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div className="">
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex gap-5 items-center mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border  rounded bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                className="border max-w-10 sm:max-w-12 px-1 bg-slate-50 py-0"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-5 mr-4 sm:w-5 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
