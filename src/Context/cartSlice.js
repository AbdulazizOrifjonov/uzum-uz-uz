import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: 'cart',
    initialState: {
        value: JSON.parse(localStorage.getItem('cart')) || [],
    },
    reducers: {
        incCart(state, { payload }) {
            let index = state.value.findIndex(el => el._id === payload._id)
            if (index < 0) {
                state.value = [...state.value, { ...payload, quontitiy: 1 }]
            }
            else {
                state.value = state.value.map((item, inx) => {
                    if (inx === index) {
                        return { ...item, quontitiy: item.quontitiy + 1 }
                    }
                    else {
                        return item
                    }
                })
            }
            localStorage.setItem ('cart' , JSON.stringify(state.value))
        },
        decCart(state, { payload }) {
            let index = state.value.findIndex(el => el._id === payload._id)
            state.value = state.value.map((item, inx) => index === inx ? { ...item, quontitiy: item.quontitiy - 1 } : item)
        },
        removCart(state, { payload }) {
            state.value = state.value.filter((item)=> item._id !== payload._id)
        },
        removAllCart(state) {
           state.value = []
        }
    }
});

export const { incCart, decCart, removCart, removAllCart } = actions;
export default reducer;








// import { createSlice } from "@reduxjs/toolkit";

// const { actions, reducer } = createSlice({
//     name: 'cart',
//     initialState: {
//         value: [],
//     },
//     reducers: {
//         incCart(state, { payload }) {
//             let index = state.value.findIndex(el => el._id === payload._id)
//             if (index < 0) {
//                 state.value = [...state.value, { ...payload, quontitiy: 1 }]
//             }
//             else {
//                 state.value = state.value.map((item, inx) => {
//                     if (inx === index) {
//                         return { ...item, quontitiy: item.quontitiy + 1 }
//                     }
//                     else {
//                         return item
//                     }
//                 })
//             }
//         },
//         decCart(state, { payload }) {
//             let index = state.value.findIndex(el => el._id === payload._id)
//             state.value = state.value.map((item, inx) => index === inx ? { ...item, quontitiy: item.quontitiy - 1 } : item)
//         },
//         removCart(state, { payload }) {
//             // Implement removeCart logic here
//         },
//         removAllCart(state) {
//             // Implement removeAllCart logic here
//         }
//     }
// });

// export const { incCart, decCart, removCart, removAllCart } = actions;
// export default reducer;


// import { createSlice } from "@reduxjs/toolkit";

//  export const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         value: [],
//     },
//     reducers: {
//         incCart(state, { payload }) {
//             let index = state.value.findIndex(el => el._id === payload._id)
//             if (index < 0) {
//                 state.value = [...state.value, { ...payload, quantity: 1 }] // Corrected "quontitiy" to "quantity"
//             }
//             else {
//                 state.value = state.value.map((item, inx) => {
//                     if (inx === index) {
//                         return { ...item, quantity: item.quantity + 1 } // Corrected "quontitiy" to "quantity"
//                     }
//                     else {
//                         return item
//                     }
//                 })
//             }
//         },
//         decCart(state, { payload }) {
//             let index = state.value.findIndex(el => el._id === payload._id)
//             state.value = state.value.map((item, inx) => index === inx ? { ...item, quantity: item.quantity - 1 } : item) // Corrected "quontitiy" to "quantity"
//         },
//         removCart(state, { payload }) {
//             // Implement removeCart logic here
//         },
//         removAllCart(state) {
//             // Implement removeAllCart logic here
//         }
//     }
// });

// export const { incCart, decCart, removCart, removAllCart } = cartSlice.actions
// export default cartSlice.reducer;






// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         value: [],
//     },
//     reducers: {
//         incCart(state, { payload }) {
//             let index = state.value.findIndex(el => el._id === payload._id);
//             if (index < 0) {
//                 state.value = [...state.value, { ...payload, quantity: 1 }];
//             } else {
//                 state.value = state.value.map((item, inx) => {
//                     if (inx === index) {
//                         return { ...item, quantity: item.quantity + 1 };
//                     } else {
//                         return item;
//                     }
//                 });
//             }
//         },
//         decCart(state, { payload }) {
//             let index = state.value.findIndex(el => el._id === payload._id);
//             state.value = state.value.map((item, inx) => index === inx ? { ...item, quantity: item.quantity - 1 } : item);
//         },
//         removCart(state, { payload }) {
//             // Implement removeCart logic here
//         },
//         removAllCart(state) {
//             // Implement removeAllCart logic here
//         }
//     }
// });

// export const { incCart, decCart, removCart, removAllCart } = cartSlice.actions;
// export default cartSlice.reducer;
