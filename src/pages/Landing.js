import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import styled from 'styled-components/macro'

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt='jobster logo' className='logo' />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span>app
          </h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          ratione alias sequi dignissimos aliquid autem debitis! Consequuntur
          quibusdam natus qui, numquam aperiam illo possimus magni! Corrupti,
          repdiandae. Nam, sint mollitia.
        </p>
        <button className='btn'>Login/Register</button>
      </div>
      <img src={main} alt='some logo' />
    </main>
  )
}

export default Landing
