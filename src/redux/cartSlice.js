import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
  },
  reducers: {
    add: (store, action) => {
      if (store.items[action.payload]) {
        store.items[action.payload]++;
      } else {
        store.items[action.payload] = 1;
      }
    },
    delete: (store, action) => {
      delete store.items[action.payload];
    },
    increment: (store, action) => {
      store.items[action.payload]++;
    },
    decrement: (store, action) => {
      if (store.items[action.payload] > 1) {
        store.items[action.payload]--;
      } else {
        delete store.items[action.payload];
      }
    },
  },
});

export default cartSlice.reducer;
