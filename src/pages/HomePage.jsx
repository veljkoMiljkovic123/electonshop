import React, { useEffect, useState } from "react";
import ProductsService from "../services/productsService";
import { useDispatch, useSelector } from "react-redux";
import { saveAllProductsAction } from "../store/productsSlice";
import CardProductComponent from "../components/CardProductComponent";

//icons
import { FaList } from "react-icons/fa";
import { MdGridView } from "react-icons/md";

function HomePage() {
  const [activeView, setActiveView] = useState("listView");

  //1 step - ??? useSelector
  const { allProducts, currentCategory } = useSelector(
    (state) => state.productStore
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentCategory === "allProducts") {
      ProductsService.getAllProducts()
        .then((res) => dispatch(saveAllProductsAction(res.data.products)))
        .catch((err) => console.log(err));
    } else {
      ProductsService.getAllProductsCategory(currentCategory)
        .then((res) => dispatch(saveAllProductsAction(res.data.products)))
        .catch((err) => console.log(err));
    }
  }, [currentCategory]);

  return (
    <main className="container mx-auto">
      {/* grid/list view */}

      <div className="flex justify-end mt-[20px] mr-[20px] gap-5">
        <button onClick={() => setActiveView("listView")} 
        className={activeView === "listView" ? "bg-mainBlue p-1 rounded-xl text-whiteTextColor" : "p-1"}>
          {" "}
          <FaList size={30} />{" "}
        </button>
        <button onClick={() => setActiveView("gridView")}
        className={activeView === "gridView" ? "bg-mainBlue p-1 rounded-xl text-whiteTextColor" : "p-1"}>
          {" "}
          <MdGridView size={30} />{" "}
        </button>
      </div>

      {/* Our Products */}
      <div className={activeView === "listView" ? "grid grid-cols-1 gap-5" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-content-center gap-5 mt-5"}>
        {allProducts.map((product, i) => {
          return <CardProductComponent activeView={activeView} product={product} key={product.id} />;
        })}
      </div>
    </main>
  );
}

export default HomePage;
