import React from 'react'
import { useState, useEffect } from 'react'
import { Logo } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMemener: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    console.log(e.target)
  }

  const onSubmit = (e) => {
    e.preventDefalut()
    console.log(e.target)
  }

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        <div className='form-row'></div>
      </form>
    </Wrapper>
  )
}

export default Register
