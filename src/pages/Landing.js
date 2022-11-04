import React from 'react'
import main from '../assets/images/main.svg'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span>app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            ratione alias sequi dignissimos aliquid autem debitis! Consequuntur
            quibusdam natus qui, numquam aperiam illo possimus magni! Corrupti,
            repdiandae. Nam, sint mollitia.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='some logo' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
