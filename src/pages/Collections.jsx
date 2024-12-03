import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopConext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItems from "../components/ProductItems";

const Collections = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSortCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();

    if (search && showSearch) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProduct(productCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProduct.slice();

    switch (sortType) {
      case "low-high":
        setFilterProduct(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProduct(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
    }
  };
  useEffect(() => {
    applyFilter();
  }, [category, subCategory,search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter section on the left */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-4 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* category filter */}
        <div>
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  className="w-6"
                  type="checkbox"
                  value={"Men"}
                  onChange={toggleCategory}
                />
                Men
              </p>
              <p className="flex gap-2">
                <input
                  className="w-6"
                  type="checkbox"
                  value={"Women"}
                  onChange={toggleCategory}
                />
                Women
              </p>
              <p className="flex gap-2">
                <input
                  className="w-6"
                  type="checkbox"
                  value={"Kids"}
                  onChange={toggleCategory}
                />
                Kids
              </p>
            </div>
          </div>
          {/* subcategory filter */}
        </div>
        {/* products to be filtered on the right */}
        <div className="min-w-60 ">
          {/* category filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 my-5 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  className="w-6"
                  type="checkbox"
                  value={"Topwear"}
                  onChange={toggleSortCategory}
                />
                Top wear
              </p>
              <p className="flex gap-2">
                <input
                  className="w-6"
                  type="checkbox"
                  value={"Bottomwear"}
                  onChange={toggleSortCategory}
                />
                Bottom wear
              </p>
              <p className="flex gap-2">
                <input
                  className="w-6"
                  type="checkbox"
                  value={"Winterwear"}
                  onChange={toggleSortCategory}
                />
                Winter wear
              </p>
            </div>
          </div>
        </div>
        {/* subcategory filter */}
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          {/* PRODUCT SORT */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 rounded border-gray-300 text-sm px-2"
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProduct.map((item, index) => (
            <ProductItems
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
