import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'unknown',
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.value = action.payload
    },
    login: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { logout, login } = userSlice.actions

export default userSlice.reducer