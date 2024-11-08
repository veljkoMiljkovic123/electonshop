import React from "react";
import { useDispatch } from "react-redux";
import { ImCross } from "react-icons/im";
import { deleteItemCartAction, setPriceHandler } from "../store/cartSlice";

function CartItemComponent({ item, index }) {
  const dispatch = useDispatch();

  // Funkcija za uklanjanje proizvoda iz korpe
  function removeItemHandler() {
    dispatch(deleteItemCartAction(item));
  }

  // Funkcija za ažuriranje količine proizvoda
  function updateQuantityHandler(increment) {
    const newCount = item.count + increment;

    if (newCount <= 0) {
      dispatch(deleteItemCartAction(item)); // Ako je količina manja ili jednaka 0, uklanjamo proizvod
    } else {
      dispatch(setPriceHandler({ increment, index })); // Ako povećavamo količinu, ažuriramo cene
    }
  }

  // Zaokruživanje ukupne cene na dve decimale
  const formattedCartTotal = item.cartTotal.toFixed(2);
  const formattedPrice = item.price.toFixed(2);

  return (
    <div className="grid grid-cols-4 place-items-center mt-5 relative border-b-2 pb-[10px]">
      <div className="flex gap-3 items-center">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="hidden lg:flex w-[100px] h-[100px] object-cover rounded-2xl"
        />
        <div>
          <h2>{item.title}</h2>
          <p>{item.category}</p>
          <p>{item.stock}</p>
        </div>
      </div>
      <div>
        <p>${formattedPrice}</p> {/* Prikazujemo cenu sa dve decimale */}
      </div>
      <div className="flex items-center">
        <button
          className="px-2 py-1 bg-slate-300 text-[18px]"
          onClick={() => updateQuantityHandler(1)} // Povećavamo količinu
        >
          +
        </button>
        <span className="px-2 py-1 bg-slate-300 text-[18px]">{item.count}</span>
        <button
          className="px-2 py-1 bg-slate-300 text-[18px]"
          onClick={() => updateQuantityHandler(-1)} // Smanjujemo količinu
        >
          -
        </button>
      </div>
      <div>${formattedCartTotal}</div>{" "}
      {/* Prikazujemo ukupnu cenu sa dve decimale */}
      <div>
        <ImCross
          color="red"
          className="absolute right-5 top-10 cursor-pointer"
          onClick={removeItemHandler}
        />
      </div>
    </div>
  );
}

export default CartItemComponent;
