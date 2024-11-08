import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveAllProductsAction } from "../store/productsSlice"; // Import akcije
import ProductsService from "../services/productsService";
import CardProductComponent from "../components/CardProductComponent";
<<<<<<< HEAD

function HomePage() {
  const { allProducts } = useSelector((state) => state.productStore);
  const dispatch = useDispatch();

  useEffect(() => {
    ProductsService.getAllProducts()
      .then((res) => {
        dispatch(saveAllProductsAction(res.data.products)); // Spremi proizvode u store
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <main className="container mx-auto">
      <div className="flex flex-wrap items-center justify-center mt-[50px] gap-8">
        {allProducts.map((product) => (
          <CardProductComponent product={product} key={product.id} />
        ))}
=======
import { motion } from "framer-motion";
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
>>>>>>> c683fde2d71bb2d1353d798a1229566d6a152c5c
      </div>

      {/* Our Products */}
      <motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  <div className={activeView === "listView" ? "grid grid-cols-1 gap-5" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-content-center gap-5 mt-5"}>
    {allProducts.map((product, i) => {
      return <CardProductComponent activeView={activeView} product={product} key={product.id} />;
    })}
  </div>
</motion.div>

    </main>
  );
}

export default HomePage;
