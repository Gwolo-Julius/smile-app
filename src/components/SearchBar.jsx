import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopConext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 py-2 px-5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none bg-inherit flex-1 text-sm text-gray-600"
          type="text"
          placeholder="Search..."
        />
        <img className="w-5 cursor-pointer" src={assets.search_icon} alt="" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-5 cursor-pointer"
        src={assets.cross_icon}
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
