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

export const getRequestItems = createAsyncThunk(
  'request/getRequestItems',
  () => {
    return fetch(`${process.env.REACT_APP_API_URI}/requests`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => data);
  },
);

const requestSlice = createSlice({
  name: 'request',
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
    [getRequestItems.fulfilled](state, action) {
      state.status = 'succeeded';
      state.items = action.payload;
    },
    [getRequestItems.pending](state) {
      state.status = 'loading';
    },
    [getRequestItems.rejected](state) {
      state.status = 'failed';
      state.error = 'Failed to get items from the API';
    },
  },
});

export const { sortByDate, filterItem } = requestSlice.actions;
export default requestSlice.reducer;
