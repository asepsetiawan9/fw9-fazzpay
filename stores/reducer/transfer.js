import { createSlice } from '@reduxjs/toolkit';
import { getHistory } from '../actions/profile';

const initialState ={
  data: {}
}

const transfer = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getHistory.fulfilled, (state, action) => {
      state.data = action.payload.results
    });
  }
})


export { getHistory }
export default transfer.reducer 