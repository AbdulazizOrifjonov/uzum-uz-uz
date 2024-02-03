// import { createSlice } from "@reduxjs/toolkit";

// export const wishesSlice = createSlice({
//   name: "wishes",
//   initialState: {
//     value: []
//   },
//   reducers: {
//     addToWishes(state, action) {
//       state.value = [...state.value, action.payload];
//     },
//     removeFromWishes(state, action) {
//       state.value = state.value.filter((el) => el._id !== action.payload._id);
//     }
//   }
// });

// export const { addToWishes, removeFromWishes } = wishesSlice.actions;
// export default wishesSlice.reducer;

// wishesSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const wishesSlice = createSlice({
    name: "wishes",
    initialState: {
        value: JSON.parse(localStorage.getItem("likes")) || [],
    },
    reducers: {
        toggleWishes(state, action) {
           
            const existingProduct = state.value.find((el) => el._id === action.payload._id);

            if (existingProduct) {
                // Product is already in the wishlist, remove it
                state.value = state.value.filter((el) => el._id !== action.payload._id);
            } else {
                // Product is not in the wishlist, add it
                state.value = [...state.value, action.payload];
            }

            localStorage.setItem('likes', JSON.stringify(state.value));
        },
    },
});

export const { toggleWishes } = wishesSlice.actions;
export default wishesSlice.reducer;




// import { createSlice } from "@reduxjs/toolkit";

// export const wishesSlice = createSlice({
//   name: "wishes",
//   initialState: {
//     value: []
//   },
//   reducers: {
//     addToWishes(state, action) {
//       state.value = [...state.value, action.payload];
//     },
//     remoweFromWishes(state, action) {
//       state.value = state.value.filter((el) => el._id === action.payload._id);
//     }
//   }
// });

// export const { addToWishes, remoweFromWishes } = wishesSlice.actions
// export default wishesSlice.reducer;
