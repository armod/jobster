import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/axios'
import { toast } from 'react-toastify'

const initialState = {
  isLoading: false,
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload
      state.isLoading = false
      state.user = user
      toast.success(`Hello There ${user.name}`)
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
  },
})

export const registerUser = createAsyncThunk(
  'user/register/User',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/testingRegister', user)
      console.log(resp)
      return resp.data
    } catch (error) {
      toast.error(error.response.data.msg)
      console.log(error.resp)
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
    // console.log(`Login User : ${JSON.stringify(user)}`)
    // console.log(`Register User : ${user}`)
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    // console.log(`Login User : ${JSON.stringify(user)}`)
    // console.log(`Login User : ${user}`)
  }
)

export default userSlice.reducer
