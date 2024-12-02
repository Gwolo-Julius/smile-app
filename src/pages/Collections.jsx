import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopConext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItems from "../components/ProductItems";

const Collections = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortCategory, setSotCategory] = useState([]);
  const { products } = useContext(ShopContext);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSortCategory = (e) => {
    if (sortCategory.includes(e.target.value)) {
      setSotCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSotCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (sortCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        sortCategory.includes(item.sortCategory)
      );
    }
    setFilterProduct(productCopy);
  };
  useEffect(() => {
    setFilterProduct(products);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [category, sortCategory]);

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
                Topwear
              </p>
              <p className="flex gap-2">
                <input
                  className="w-6"
                  type="checkbox"
                  value={"Bottomwear"}
                  onChange={toggleSortCategory}
                />
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input
                  className="w-6"
                  type="checkbox"
                  value={"Winterwear"}
                  onChange={toggleSortCategory}
                />
                Winterwear
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
          <select className="border-2 rounded border-gray-300 text-sm px-2">
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
