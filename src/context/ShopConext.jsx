import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fees = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please Select Product Size");
      return;
    }
    let cartDate = structuredClone(cartItems);

    if (cartDate[itemId]) {
      if (cartDate[itemId][size]) {
        cartDate[itemId][size] += 1;
      } else {
        cartDate[itemId][size] = 1;
      }
    } else {
      cartDate[itemId] = {};
      cartDate[itemId][size] = 1;
    }
    setCartItems(cartDate);
  };
  // useEffect(()=>{
  //   console.log(cartItems)
  // },[cartItems])

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          // console.log("Add a product");
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };
  
  const value = {
    products,
    currency,
    delivery_fees,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
