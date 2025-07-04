import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './About.scss'
import { urlFor, client } from '../../client'

import { AppWrap, MotionWrap } from '../../wrapper'

// const abouts = [
//   { title: 'Web Development', description: 'I am a good developer', imgUrl: images.about01 },
//   { title: 'Web Design', description: 'I am a good developer', imgUrl: images.about02 },
//   { title: 'UI/UX', description: 'I am a good developer', imgUrl: images.about03 },
//   { title: 'Full Stack', description: 'I am a good developer', imgUrl: images.about04 }
// ]

const About = () => {

  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]'

  //   client.fetch(query)
  //     .then((data) => { setAbouts(data) })


  // }, [])




  return (
    <>
      <h2 className='head-text'>
        Something about me?
      </h2>

      <div className='app__profiles w-1/3'>
        <div className="flex justify-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, type: 'tween' }}
            className="w-1/3 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 my-10 border border-gray-200"
          >
            <p className="text-gray-800 text-lg leading-relaxed font-inter text-left space-y-4">
              <span className="block text-2xl font-semibold mb-4 text-gray-900 text-center">
                Hi, I'm <span className="text-blue-600">Muhammad Ahmed</span>.
              </span>

              I'm a <strong>Software Engineer</strong> with <strong>1.5 years of experience</strong> in full-stack development, currently pursuing an <strong>M.Sc. in Artificial Intelligence</strong> at FAU Erlangen-Nürnberg, Germany. I enjoy building systems that are not just functional but also <em>clean</em>, <em>scalable</em>, and <em>user-focused</em>.

              <br /><br />

              I'm especially interested in blending <strong>AI and full-stack engineering</strong> to build smarter applications that solve real-world problems. Recently, I've been working on <strong>hands-on deep learning projects</strong> that merge web technologies with intelligent systems.

              <br /><br />

              Previously, I worked at <strong>PayFast</strong>, a leading fintech company, where I contributed to the development and optimization of secure, high-performance payment solutions used by thousands of users across Pakistan.

              <br /><br />

              Outside of work, I love <strong>learning by building</strong>. I often explore new frameworks, contribute to side projects, or help my wife with her AI coursework. When I’m not coding, I’m likely <em>gaming, upgrading my PC setup</em>, or geeking out over the latest tech news.

              <br /><br />

              <span className="block mt-6 font-medium text-gray-700 text-center">Thanks for stopping by!</span>
              <br /><br />

              <span className="block font-semibold text-blue-700 mt-1 text-center">Muhammad Ahmed</span>
            </p>
          </motion.div>
        </div>



      </div>
    </>
  )
}

// export default AppWrap(
//   MotionWrap(About, 'app__about'),
//    'about',
//    'app__whitebg'
//    )

export default AppWrap(About, 'about')