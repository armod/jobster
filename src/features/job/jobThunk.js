import { showLoading, hideLoading, getAllJobs } from '../allJobs/allJobsSlice'
import { logoutUser } from '../user/userSlice'
import { clearValues } from './jobSlice'
import customFetch from '../../utils/axios'

const authHeader = (thunkAPI) => {
  return {
    headers: {
      authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
    },
  }
}

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const resp = await customFetch.post('/jobs', job, authHeader(thunkAPI))
    thunkAPI.dispatch(clearValues())
    return resp.data.deleteJOB
  } catch (error) {
    //basic setup
    // return thunkAPI.rejectWithValue(error.response.data.msg)
    //logout user
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser())
      return thunkAPI.rejectWithValue('Unauthorized! Logging out...!')
    }
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const deleteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading())
  try {
    const resp = await customFetch.delete(`/jobs/${jobId}`, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    })
    thunkAPI.dispatch(getAllJobs())
    return resp.data.msg
  } catch (error) {
    thunkAPI.dispatch(hideLoading())
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const resp = await customFetch.patch(`/jobs/${jobId}`, job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    })
    thunkAPI.dispatch(clearValues())
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
