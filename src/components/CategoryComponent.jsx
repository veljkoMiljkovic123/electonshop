import React, { useEffect, useState } from "react";
import ProductsService from "../services/productsService";

function CategoryComponent() {
  const [category, setCategory] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    ProductsService.getAllCategories()
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCategoryActive() {
    setIsActive(!isActive);
  }
  return (
    <div className="bg-f4f4f4 py-5">
      <div className="container mx-auto flex flex-col lg:flex-row h-full items-center gap-[40px]">
        <button
          onClick={handleCategoryActive}
          className="bg-mainBlue text-whiteTextColor px-[12px] py-[6px] rounded-lg cursor-pointer hover:bg-mainYellow transition-all"
        >
          {isActive ? "Hide" : "Show"} category
        </button>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-5 place-items-center">
          {isActive
            ? category.map((cat, i) => {
                return (
                  <li
                    key={i}
                    className="bg-mainBlue w-[250px] text-center text-whiteTextColor px-4 py-2 rounded-lg cursor-pointer hover:bg-mainYellow transition-all"
                  >
                    {cat}
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
}

export default CategoryComponent;
