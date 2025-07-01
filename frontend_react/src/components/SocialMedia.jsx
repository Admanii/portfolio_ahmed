import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


const SocialMedia = ({ active }) => {

  // console.log(active)
  return (
    // <div className='app__social' style={{ marginBottom: 25}}>
    //Icons were cropping in home page, hence the conditional styling for id == home
    <div className='app__social' >
      <div>
        <a
          href="https://github.com/Admanii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <div>
        <a
          href="https://www.linkedin.com/in/muhammad-ahmed-fau/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      <div>
        <a href="mailto:ahmedriaz-50@hotmail.com">
          <MdEmail />
        </a>
      </div>

    </div>

  )
}

export default SocialMedia