import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  type: [
    'All',
    'Books',
    'Stationery',
    'School Books',
    'Novels',
    'Test Books',
    'Furniture',
  ],
  sortOrder: 'ASC',
  status: 'idle',
  error: null,
};

export const getAvailableItems = createAsyncThunk(
  'donated/getAvailableItems',
  () => {
    return fetch(`${process.env.REACT_APP_API_URI}/items/available`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => data);
  },
);

export const getItemsByFilter = createAsyncThunk(
  'donated/getItemsByFilter',
  (p) => {
    return fetch(`${process.env.REACT_APP_API_URI}/items/filter?type=${p}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => data);
  },
);

const donatedSlice = createSlice({
  name: 'donated',
  initialState,
  reducers: {
    sortByDate(state, action) {
      if (action.payload === 'DESC') {
        state.items.sort((a, b) => {
          if (a.createdAt > b.createdAt) return -1;
          if (a.createdAt < b.createdAt) return 1;
          return 0;
        });
        state.sortOrder = 'DESC';
      } else {
        state.items.sort((a, b) => {
          if (a.createdAt > b.createdAt) return 1;
          if (a.createdAt < b.createdAt) return -1;
          return 0;
        });
        state.sortOrder = 'ASC';
      }
    },
  },
  extraReducers: {
    [getAvailableItems.fulfilled](state, action) {
      state.status = 'succeeded';
      state.items = action.payload;
    },
    [getAvailableItems.pending](state) {
      state.status = 'loading';
    },
    [getAvailableItems.rejected](state) {
      state.status = 'failed';
      state.error = 'Failed to get items from the API';
    },
    [getItemsByFilter.fulfilled](state, action) {
      state.status = 'succeeded';
      if (action.payload.message) {
        state.status = 'failed';
        state.error = action.payload.message;
      } else {
        state.items = action.payload;
      }
    },
    [getItemsByFilter.pending](state) {
      state.status = 'loading';
    },
    [getItemsByFilter.rejected](state) {
      state.status = 'failed';
      state.error = 'Failed to get items from the API';
    },
  },
});

export const { sortByDate } = donatedSlice.actions;
export default donatedSlice.reducer;
