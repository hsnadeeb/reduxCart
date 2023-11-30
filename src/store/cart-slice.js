import { createSlice } from "@reduxjs/toolkit";

createSlice({
    name: Cart,
    initialState:{
        item:[],
        totalQuantity:0,
        totalAmount:0

    },
    reducer:{
        addItemToCart(state, action){
            const item = action.payload;
            const existingItem = state.items.find(items=> item.id === newItem.id);
            if(!existingItem){
                state.item.push({
                    itemId: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(){}
    }
})