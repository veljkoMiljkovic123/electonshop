// ProductListComponent.js
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsService from "../services/productsService";
import { saveAllProductsAction } from "../store/productsSlice";

function ProductListComponent() {
  const dispatch = useDispatch();
  const { currentCategory, allProducts } = useSelector(
    (state) => state.products
  );
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Ako je trenutna kategorija "allProducts", učitaj sve proizvode
    if (currentCategory === "allProducts") {
      setProducts(allProducts);
    } else {
      ProductsService.getProductsByCategory(currentCategory)
        .then((response) => setProducts(response.data))
        .catch((error) =>
          console.error("Greška prilikom učitavanja proizvoda:", error)
        );
    }
  }, [currentCategory, allProducts, dispatch]); // Ponovno učitavanje proizvoda kad se promeni kategorija

  return (
    <div>
      <h2>Proizvodi za kategoriju: {currentCategory}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListComponent;
