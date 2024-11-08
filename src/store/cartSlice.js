import { createSlice } from "@reduxjs/toolkit";

// Funkcija za izračunavanje ukupne cene
function subTotal(arrayCart) {
  return arrayCart.reduce((acc, current) => {
    return acc + current.cartTotal;
  }, 0);
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalProduct: 0,
    totalPrice: 0,
  },
  reducers: {
    // Akcija za dodavanje proizvoda u korpu
    saveInCartAction: (state, action) => {
      let copyArray = [...state.cart];
      let findIndex = null;

      // Proveravamo da li proizvod već postoji u korpi
      copyArray.find((item, index) => {
        if (item.id === action.payload.id) {
          findIndex = index;
          return;
        }
      });

      if (findIndex === null) {
        // Ako proizvod nije u korpi, dodajemo ga i povećavamo broj proizvoda u bedžu
        copyArray.push({
          ...action.payload,
          count: 1,
          cartTotal: action.payload.price,
        });
        state.totalProduct++; // Povećavamo broj proizvoda u bedžu samo kad je proizvod nov
        state.totalPrice += action.payload.price;
      } else {
        // Ako proizvod već postoji, samo povećavamo količinu bez promena u totalProduct
        copyArray[findIndex].count++;
        copyArray[findIndex].cartTotal =
          copyArray[findIndex].count * copyArray[findIndex].price;
      }

      state.cart = copyArray;
      state.totalPrice = subTotal(copyArray);
    },

    // Akcija za uklanjanje proizvoda iz korpe
    deleteItemCartAction: (state, action) => {
      let copyArray = [...state.cart];
      let findIndex = null;

      // Tražimo proizvod u korpi
      copyArray.find((item, index) => {
        if (item.id === action.payload.id) {
          findIndex = index;
          return;
        }
      });

      if (findIndex !== null) {
        copyArray.splice(findIndex, 1);
        state.totalProduct--; // Smanjujemo broj proizvoda u bedžu kad uklonimo proizvod
        state.totalPrice = subTotal(copyArray);
      }

      state.cart = copyArray;
    },

    // Akcija za promenu cene i količine proizvoda u korpi
    setPriceHandler: (state, action) => {
      const { increment, index } = action.payload;
      let copyArray = [...state.cart];

      // Ažuriranje cene proizvoda u korpi
      copyArray[index].cartTotal += copyArray[index].price * increment;
      state.totalPrice = subTotal(copyArray);

      // Ako smanjujemo količinu na 0, uklanjamo proizvod iz korpe
      if (copyArray[index].count === 1 && increment === -1) {
        copyArray.splice(index, 1);
        state.totalProduct--; // Smanjujemo broj proizvoda u bedžu kad uklonimo proizvod
      } else {
        copyArray[index].count += increment;
        // **Ne menjamo** totalProduct ako samo menjamo količinu postojećeg proizvoda
      }

      state.cart = copyArray;
    },

    // Akcija za ažuriranje količine proizvoda
    updateItemQuantityAction: (state, action) => {
      const { id, quantity } = action.payload;
      let copyArray = [...state.cart];
      const itemIndex = copyArray.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        copyArray[itemIndex].count = quantity;
        copyArray[itemIndex].cartTotal =
          copyArray[itemIndex].count * copyArray[itemIndex].price;
      }

      state.cart = copyArray;
      state.totalProduct = copyArray.reduce((acc, item) => acc + item.count, 0);
      state.totalPrice = subTotal(copyArray);
    },
  },
});

export const {
  saveInCartAction,
  deleteItemCartAction,
  setPriceHandler,
  updateItemQuantityAction, // Dodavanje akcije za update
} = cartSlice.actions;

export default cartSlice.reducer;
