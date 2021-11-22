import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    items:[],
    payment: null,
    summary: null,
    invoiceNumber : 0,
    address : null,
    GSTIN : 0,
    FSTIN : 0,
    createdBy : null,
    createdDateTime : null
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state = state.items.splice(action.payload)
    },
    updateItem: (state, action) => {
      // state.value += action.payload
      state.items[action.index] = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, updateItem } = orderSlice.actions

export default orderSlice.reducer