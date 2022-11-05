import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
})

export const registerUser = createAsyncThunk(
  'user/register/User',
  async (user, thunkAPI) => {
    // console.log(`Login User : ${JSON.stringify(user)}`)
    console.log(`Register User : ${user}`)
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    // console.log(`Login User : ${JSON.stringify(user)}`)
    console.log(`Login User : ${user}`)
  }
)

export default userSlice.reducer
