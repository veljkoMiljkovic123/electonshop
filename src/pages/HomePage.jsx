import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveAllProductsAction } from "../store/productsSlice"; // Import akcije
import ProductsService from "../services/productsService";
import CardProductComponent from "../components/CardProductComponent";

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
      </div>
    </main>
  );
}

export default HomePage;
