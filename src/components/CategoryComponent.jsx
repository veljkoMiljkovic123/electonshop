import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewCategoryAction } from "../store/productsSlice";
import ProductsService from "../services/productsService"; // Importuj servis

function CategoryComponent() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]); // Koristimo categories umesto category
  const [isActive, setIsActive] = useState(false); // Kontrola prikaza

  const { currentCategory } = useSelector((state) => state.productStore); // Trenutna kategorija iz Redux store-a

  useEffect(() => {
    ProductsService.getAllCategories()
      .then((response) => {
        setCategories(response.data); // Postavljamo kategorije iz API odgovora
      })
      .catch((error) => {
        console.error("Greška prilikom učitavanja kategorija:", error);
      });
  }, []);

  // Funkcija za prebacivanje stanja dugmeta (Show/Hide)
  function handleCategoryActive() {
    setIsActive((prevState) => !prevState);
  }

  return (
    <div className="bg-[#f4f4f4] py-5">
      <div className="container flex-col mx-auto flex items-center gap-5 h-full lg:flex-row">
        <button
          onClick={handleCategoryActive}
          className="bg-mainBlue text-whiteTextColor px-3 py-[6px] rounded-md cursor-pointer transition-all duration-200  hover:bg-mainYellow"
        >
          {isActive ? "Hide" : "Show"} Category
        </button>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px] place-items-center">
          {isActive && (
            <>
              <li
                onClick={() => {
                  dispatch(setNewCategoryAction("allProducts"));
                  setIsActive(false);
                }}
                className="text-whiteTextColor px-[16px] py-[8px] w-[250px] text-center rounded-lg cursor-pointer hover:bg-mainYellow transition-all"
                style={
                  "allProducts" === currentCategory
                    ? { backgroundColor: "#EDA415" }
                    : { backgroundColor: "#003F62" }
                }
              >
                All Products
              </li>
              {categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => {
                    dispatch(setNewCategoryAction(category.name)); // Kategorija se sada koristi iz objekta
                    setIsActive(false);
                  }}
                  className="text-center text-whiteTextColor px-4 py-2 w-[250px] rounded-lg cursor-pointer hover:bg-mainYellow transition-all duration-150"
                  style={
                    category.name === currentCategory
                      ? { backgroundColor: "#EDA415" }
                      : { backgroundColor: "#003F62" }
                  }
                >
                  {category.name}
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default CategoryComponent;
