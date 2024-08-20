import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    products: [],
    totalPrice : 0,
    totalQuantity: 0
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers :{
        addToCart(state, action){
           const addedItem = action.payload;
        const    itemExist = state.products.find((item) => addedItem.id === item.id)

            if(itemExist){
                itemExist.quantity++
                itemExist.totalPrice += addedItem.price
                
            }
            else{
                state.products.push({
                    id: addedItem.id,
                    name:addedItem.name,
                    price:addedItem.price,
                    quantity: 1,
                    totalPrice: addedItem.price,
                    image:addedItem.image
                    
                })

            }
            state.totalPrice  += addedItem.price
            state.totalQuantity++

            

        },
        removeFromCart(state, action){
              const  itemId = action.payload;
               const itemToRemove = state.products.find((item) => itemId === item.id);

               if(itemToRemove){
                state.totalPrice -= itemToRemove.totalPrice
                state.totalQuantity -= itemToRemove.quantity

                state.products = state.products.filter((item) => itemId !== item.id)
            }
            },

            increaseQuantity(state, action){
                const itemId = action.payload;
                const itemToIncrease = state.products.find((item) => itemId === item.id);

               if(itemToIncrease){
                itemToIncrease.quantity++
                itemToIncrease.totalPrice += itemToIncrease.price;
                state.totalQuantity++;
                state.totalPrice += itemToIncrease.price

               }
            },
            decreaseQuantity(state, action){
                const itemId = action.payload;
                const itemToDecrease = state.products.find((item) => itemId === item.id);
                if(itemToDecrease.quantity > 1){

                    if(itemToDecrease){
                        itemToDecrease.quantity--
                        itemToDecrease.totalPrice -= itemToDecrease.price;
                        state.totalQuantity--;
                        state.totalPrice -= itemToDecrease.price
        
                       }
                }

               
            },

            
            
    }
})

export  const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer
