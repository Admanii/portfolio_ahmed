import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const SocialMedia = ({ active }) => {

  // console.log(active)
  return (
    // <div className='app__social' style={{ marginBottom: 25}}>
    //Icons were cropping in home page, hence the conditional styling for id == home
    <div className='app__social' >
      <div>
        <BsTwitter />
      </div>

      <div>
        <FaFacebook />
      </div>

      <div>
        <BsInstagram />
      </div>

    </div>

  )
}

export default SocialMedia