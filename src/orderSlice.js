import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
  name: 'order',
  initialState:{
    items: [],
    payment: null,
    summary: null,
    invoiceNumber: 0,
    address: null,
    GSTIN: 0,
    FSTIN: 0,
    createdBy: null,
    createdDateTime: null
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
      //state = state.items.splice(action.payload)
    },
    updateItemQty: (state, action) => {
        state.items[action.payload.index].quantity = action.payload.quantity;
        return state;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, updateItemQty } = orderSlice.actions

export default orderSlice.reducer