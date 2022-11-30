import { createSlice } from '@reduxjs/toolkit'

/*** Example slice */
const slice = createSlice({
  name: 'fruits',
  initialState: ['mango', 'watermelon'],
  reducers: {},
  extraReducers: {},
})

export default slice.reducer
