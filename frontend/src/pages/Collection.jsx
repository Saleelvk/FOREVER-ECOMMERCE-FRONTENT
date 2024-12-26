import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Titles from "../components/Titles";
import ProductItem from "../components/ProductItem";

function Collection() {
  const { products,search,showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  //  filtering .............

  const toggleCategories = (e) => {
    if (categories.includes(e.target.value)) {
      //we give value to categories from onchange
      //prev: This parameter represents the previous state of categories ///
      setCategories((prev) => prev.filter((item) => item !== e.target.value)); //removing process // unchecked box
    } else {
      setCategories((prev) => [...prev, e.target.value]); //adding process  checked box!!
    }
  };

  const toggleSubCategorie = (e) => {
    if (subCategories.includes(e.target.value)) {
      setSubCategories((prev) =>
        prev.filter((item) => item !== e.target.value)
      );
    } else {
      setSubCategories((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    // search filtering ........
    if(search&& showSearch){
      productsCopy= productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()) ) 

    }
    //filtering Categories.....
    if (categories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        categories.includes(item.category)
      );
    }
    //filtering subCategories.....

    if (subCategories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategories.includes(item.subCategory)
      );
    }

    setFilterProduct(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [categories, subCategories,search,showSearch]);

  //filtering ending...................

  useEffect(() => {
    SortProduct();
  }, [sortType]);

  // sorting .......................

  const SortProduct = () => {
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
        break;
    }
  };

  //sorting endingggg........................

  // const [Men,setMan]=useState([])
  // const [Women,setWomen]=useState([])
  // const [Kids,setKids]=useState([])
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor pointer gap-2 "
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt="dropdown_icon"
          />
        </p>

        {/* categories Options */}

        {/* when you go down'sm display' it will be 'hidden'  */}

        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">Categories</p>
          <p className="flex gap-2">
            <input
              className="w-3"
              type="checkbox"
              value={"Men"}
              onChange={toggleCategories}
            />
            Men
          </p>

          <p className="flex gap-2">
            <input
              className="w-3"
              type="checkbox"
              value={"Women"}
              onChange={toggleCategories}
            />{" "}
            Women
          </p>

          <p className="flex gap-2">
            <input
              className="w-3"
              type="checkbox"
              value={"Kids"}
              onChange={toggleCategories}
            />{" "}
            Kids
          </p>
        </div>

        {/* sub categories  filter*/}

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategorie}  
              />{" "}
              Topwear Men
            </p>

            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategorie}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubCategorie}   
              />{" "}
              Winterwear{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Right Side  */}

      <div className="flex-1">
        <div className=" flex justify-between text-base sm:text-2xl mb-4">
          <Titles text1={"ALL"} text2={"COLLECTIONS"} />

          <select
            onChange={(e) => setSortType(e.target.value)}        //sorting  
            className="border-2  border-gray-300 text-sm px-2"
            name=""
            id=""
          >
            <option value="relavent">Sort by:Relavent</option>
            <option value="low-high">Sort by:low-high</option>
            <option value="high-low">Sort by:high-low</option>
          </select>
        </div>

        {/* Map products */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProduct.map((items, index) => (
            <ProductItem
              key={index}
              id={items._id}
              image={items.image}
              name={items.name}
              price={items.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
