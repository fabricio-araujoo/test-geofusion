import { createSlice } from '@reduxjs/toolkit';
import data from '../assets/data/data.json';

export interface State {
  data: {
    name: string;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
    revenue: number;
  }[];
  filter: {
    search: string;
    balance: number;
  };
}

const initialState: State = {
  data: data.stores,
  filter: {
    search: '',
    balance: 15000
  }
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    changeData: (state, action) => {
      state.data = action.payload;
    },
    changeSearch: (state, action) => {
      state.filter.search = action.payload;
    },
    changeBalance: (state, action) => {
      state.filter.balance = action.payload;
    }
  }
});

export const { changeSearch, changeBalance, changeData } = dataSlice.actions;

export default dataSlice.reducer;
