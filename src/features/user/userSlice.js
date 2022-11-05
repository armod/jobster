import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetch from '../../utils/axios'
import { toast } from 'react-toastify'
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage'

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
}

export const registerUser = createAsyncThunk(
  'user/register/User',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/register', user)
      console.log(resp)
      return resp.data
    } catch (error) {
      toast.error(error.response.data.msg)
      // console.log(error.resp)
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
    // console.log(`Login User : ${JSON.stringify(user)}`)
    // console.log(`Register User : ${user}`)
  }
)

export const loginUser = createAsyncThunk(
  'user/login/User',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/login', user)
      console.log(resp)
      return resp.data
    } catch (error) {
      toast.error(error.response.data.msg)
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

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
      addUserToLocalStorage(user)
      toast.success(`Hello There ${user.name}`)
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },

    [loginUser.pending]: (state) => {
      state.isLoading = true
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload
      state.isLoading = false
      state.user = user
      addUserToLocalStorage(user)
      toast.success(`Welcome Back : ${user.name}`)
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
  },
})

export default userSlice.reducer
