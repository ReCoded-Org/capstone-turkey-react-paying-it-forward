import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    type: ["All", "Books", "Stationery", "School Books", "Novels", "Test Books", "Furniture"],
    status: 'idle',
    error: null,
};

export const getAvailableItems = createAsyncThunk(
    'donated/getAvailableItems',
    () => {
        return fetch(`${process.env.REACT_APP_API_URI}/items/available`, {
            headers: {
                "Content-Type": "application/json"
            }
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
                "Content-Type": "application/json"
            }
        })
            .then((resp) => resp.json())
            .then((data) => data);
    },
);

const donatedSlice = createSlice({
    name: 'donated',
    initialState,
    extraReducers: {
        [getAvailableItems.fulfilled](state, action) {
            state.status = 'succeeded';
            state.items = action.payload;
        },
        [getAvailableItems.pending](state) {
            state.status = 'loading';
        },
        [getAvailableItems.rejected](state, action) {
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
        [getItemsByFilter.rejected](state, action) {
            state.status = 'failed';
            state.error = 'Failed to get items from the API';
        },
    },
});

export default donatedSlice.reducer;
