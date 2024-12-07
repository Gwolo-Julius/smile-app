import React, { useContext } from "react";
import { ShopContext } from "../context/ShopConext";

const CartTotal = () => {
  const { currency, delivery_fee, totalCartAmount } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Sub-total:</p>
          <p>{currency}{getCartAmount()}.00</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
