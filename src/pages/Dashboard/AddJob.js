import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { FormRow } from '../../components'
import FormRowSelect from '../../components/FormRowSelect'
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from '../../features/job/jobSlice'

const AddJob = () => {
  const { user } = useSelector((store) => store.user)
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!position || !company || !jobLocation) {
      toast.error('Please Fill Out All Fileds')
      return
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      )
      return
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }))
  }

  const handleJobIput = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value)
    dispatch(handleChange({ name, value }))
  }

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }))
    }
  }, [])

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className='form-center'>
          {/* position */}
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobIput}
          />
          {/* company */}
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobIput}
          />
          {/* location */}
          <FormRow
            type='text'
            name='jobLocation'
            labelText='job location'
            value={jobLocation}
            handleChange={handleJobIput}
          />

          {/* job status */}
          <div className='form-row'>
            <label htmlFor='status' className='form-label'>
              status
            </label>
            <select
              name='status'
              id='status'
              value={status}
              onChange={handleJobIput}
              className='form-select'
            >
              {statusOptions.map((itemValue, index) => {
                return (
                  <option key={index} value={itemValue}>
                    {itemValue}
                  </option>
                )
              })}
            </select>
          </div>
          {/* job type */}

          <FormRowSelect
            name='jobType'
            labeltext='job type'
            value={jobType}
            handleChange={handleJobIput}
            list={jobTypeOptions}
          />
          {/* btn contaier */}
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => {
                dispatch(clearValues())
              }}
            >
              clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              disabled={isLoading}
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob
