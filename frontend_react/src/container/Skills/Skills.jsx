import React, { useEffect, useState } from 'react'

import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { animate, easeInOut, motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

import './Skills.scss'

import { Tooltip as ReactTooltip } from 'react-tooltip'
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';


const Skills = () => {

  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = `*[_type == 'experiences']`
    const querySkills = `*[_type == 'skills']`


    client.fetch(query)
      .then((data) => {
        setExperience(data);
      })

    client.fetch(querySkills)
      .then((data) => {
        setSkills(data);
      })
  }, [])


  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>

            </motion.div>
          ))}

        </motion.div>

        <motion.div className='app__skills-exp'>
          {experience?.map((experience) => (
            <motion.div
              className='app__skills-exp-item'
              key={experience?.year}
            >
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>

              <motion.div className='app__skills-exp-works'>
                {/* {console.log('here', experience)} */}

                {experience?.works?.map((work) => (
                  <>
                   <Tippy content= {<span className='skills-tooltip'>{work.desc}</span>}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 3 }}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>

                    </motion.div>
                    </Tippy>
                    <ReactTooltip
                      id={work.name}
                      place="top"
                      effect='solid'
                      arrowColor='#fff'
                      className='skills-tooltip'
                    >
                      {work.desc}


                    </ReactTooltip>
                    {/* {console.log('lul',work.name)} */}

                  </>

                ))}

              </motion.div>

            </motion.div>



          ))}

        </motion.div>

      </div>
    </>
  )
}

export default AppWrap(Skills, 'skills')
// export default Skills


  //  export default AppWrap(
  //   MotionWrap(Skills, 'app__skills'),
  //   'skills',
  //   'app__whitebg',
  // );