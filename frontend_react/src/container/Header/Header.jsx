import React, { useState } from 'react'
import { easeInOut, motion } from 'framer-motion'

import './Header.scss'
import { images } from '../../constants'

import { AppWrap } from '../../wrapper'


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    }
  }
}

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <motion.span
              animate={
                isHovered
                  ? {
                    rotate: [0, 20, -20, 20, -20, 0],
                  }
                  : {}
              }
              transition={
                isHovered
                  ? {
                    duration: 1,
                    repeat: Infinity,
                  }
                  : { duration: 0 }
              }
            >
              👋🏻
            </motion.span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Ahmed</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Software Engineer</p>
            <p className='p-text'>Full Stack Developer</p>
          </div>

        </div>

      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <img src={images.admani} />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: easeInOut }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>


      <motion.div

        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.node, images.react, images.javascript].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))}

      </motion.div>


    </div>
  )
}

export default AppWrap(Header, 'home')