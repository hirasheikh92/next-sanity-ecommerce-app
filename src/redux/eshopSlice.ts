import { ProductProps } from "@/types/type";
import { createSlice } from "@reduxjs/toolkit"


interface storeState{
  productData:ProductProps[];

}

const initialState:storeState ={
    productData:[]
}


export const eshopSlice = createSlice({
    name:'eshop',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const existingProduct = state?.productData.find((item: ProductProps) => {
              item?._id === action?.payload?._id;
            });
            if (existingProduct) {
              existingProduct.quantity += action.payload.quantity;
            } else {
              //if new product
              state.productData.push(action.payload);
            }
          },
          increaseQuantity:(state,action)=>{
            const existingProduct =state.productData.find((item:ProductProps)=> item._id === action.payload._id);
            existingProduct && existingProduct.quantity++;
          },
          decreaseQuantity:(state,action)=>{
            const existingProduct =state.productData.find((item:ProductProps)=> item._id === action.payload._id);
            if (existingProduct?.quantity === 1) {
              existingProduct.quantity === 1;
              
            }else{
              existingProduct && existingProduct.quantity--;
            }
          },
          deleteProduct:(state,action)=>{
      state.productData =state.productData.filter(
        (item)=> item._id!==action.payload
      );
      
      },
      resetCart:(state)=>{
        state.productData =[];
      },
    }
   
})


export const {addToCart,increaseQuantity,decreaseQuantity,deleteProduct,resetCart} = eshopSlice.actions;
export default eshopSlice.reducer;
