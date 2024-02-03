// import { createSlice } from "@reduxjs/toolkit";

// export const wishesSlice = createSlice({
// name: "wishes",
// initialState:{
//     value:[]
// },
// reducers:{
//     addToWishes(state, action){
//         state.value = [...state.value, action.payload]
//     },
//     remoweFromWishes(state, action){ 
//         state.value = state.value.filter((el) => el._id === action.payload._id)
//      }
// }
// })
// export const { addToWishes, remoweFromWishes} = wishesSlice.actions
// export default wishesSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

export const wishesSlice = createSlice({
  name: "wishes",
  initialState: {
    value: []
  },
  reducers: {
    addToWishes(state, action) {
      state.value = [...state.value, action.payload];
    },
    remoweFromWishes(state, action) {
      state.value = state.value.filter((el) => el._id === action.payload._id);
    }
  }
});

export const { addToWishes, remoweFromWishes } = wishesSlice.actions
export default wishesSlice.reducer;
