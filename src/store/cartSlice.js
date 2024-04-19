import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[],
        totalProduct: 0,
        totalPrice: 0
    },
    reducers:{
        saveInCartAction:(state,action) => {
            console.log(action.payload);
            let copyArray = [...state.cart]

            //1. Da li ga imamo u korpi, cilj je index-na pozicija
            let findIndex = null;
            //2. Ovde proveravam da li postoji u korpi
            copyArray.find((item,index)=>{
                if(item.id === action.payload.id){
                    findIndex = index;
                    return;
                }
            })

            //3. Dodaj novi proizvod u korpu ili uvecaj isti
            if(findIndex===null){
                copyArray.push({...action.payload, count: 1,cartTotal:action.payload.price})
                state.totalProduct++;
                state.totalPrice += action.payload.price;
            }else{
                copyArray[findIndex].count++;
            }
            //2. If statement

            state.cart=copyArray
        },
        deleteItemCartAction:(state,action) => {
            //Uzmi index tamo gde mapujes
            /* const {index} = action.payload */
            let copyArray = [...state.cart]
            //1. Da li ga imamo u korpi, cilj je index-na pozicija
            let findIndex = null;

            //2. Ovde proveravam da li postoji u korpi
            copyArray.find((item,index)=>{
                if(item.id === action.payload.id){
                    findIndex = index;
                    return;
                }
            })
            if(findIndex !== null){
                copyArray.splice(findIndex,1)
            }
            state.cart = copyArray
        }
    }
})

export const {saveInCartAction,deleteItemCartAction} = cartSlice.actions
export default cartSlice.reducer