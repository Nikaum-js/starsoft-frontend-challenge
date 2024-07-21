import { Product } from '@/types/product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface backpackItem extends Product {
  quantity: number;
}

interface backpackState {
  items: backpackItem[];
}

const initialState: backpackState = {
  items: [],
};

const backpackSlice = createSlice({
  name: 'backpack',
  initialState,
  reducers: {
    addItemToBackpack: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemFromBackpack: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementItemQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementItemQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addItemToBackpack,
  removeItemFromBackpack,
  incrementItemQuantity,
  decrementItemQuantity,
} = backpackSlice.actions;

export default backpackSlice.reducer;
