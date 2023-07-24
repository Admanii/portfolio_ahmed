import React from 'react'
import { NavigationDots, SocialMedia } from '../components'
// HIGHER ORDER COMPONENT

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia active={idName}/>

      <div className='app__wrapper app__flex'>
        <Component/>

        <div className='copyright'>
          <p className='p-text'>Admani 2023</p>
          <p className='p-text'>All Rights Reserved</p>
        </div>
      </div>

      <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap