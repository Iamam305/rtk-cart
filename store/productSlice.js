import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const STATUSES = Object.freeze({
    IDEL:'idel',
    ERROR:'error',
    LOADING:'loading',
})

const initialState = {
    data:[],
    status:STATUSES.IDEL
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // setProduct(state, action){
    //   state.data = action.payload
    // },

    // setStatus(state, action){
    //   state.status = action.payload
    // }
  },

  // new rtk thunk 

  extraReducers: (builder) =>{
      builder
      .addCase(fetchProducts.pending, (state, action)=>{
        state.status = STATUSES.LOADING
      })
      .addCase(fetchProducts.fulfilled, (state, action)=>{
        state.data = action.payload
        
        state.status = STATUSES.IDEL
      })
      .addCase(fetchProducts.rejected, (state, action)=>{
        
        state.status = STATUSES.ERROR
      })
  }
});

export const {setProduct, setStatus} = productSlice.actions

export default productSlice.reducer

// Thunk 

// export function fetchProducts(){
//   return async function fetchProductThunk(dispatch, getState){

//     dispatch(setStatus(STATUSES.LOADING))
//     try {
//       let res = await fetch("https://fakestoreapi.com/products");
//       let data = await res.json();
//       dispatch(setProduct(data))
//       dispatch(setStatus(STATUSES.IDEL))
//     } 
//     catch (error) {
//       dispatch(setStatus(STATUSES.ERROR))
//     }

//   } 
// }

// new RTK Thunk 


export const fetchProducts = createAsyncThunk('products/fetch', async() =>{

  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  return data;
})