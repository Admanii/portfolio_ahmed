import React from 'react'
import { NavigationDots, SocialMedia } from '../components'
// HIGHER ORDER COMPONENT

const AppWrap = (Component, idName, classNames) => function HOC() {

    // Define a variable to store the background color style
    let backgroundColorStyle = {};

    // Check if idName is 'skills', and if so, set the background color to white
    if (idName == 'skills' || idName == 'about' || idName == 'contact') {
      backgroundColorStyle = { backgroundColor: 'white' };
    }



  return (
    <div id={idName} className={`app__container ${classNames}` }  style={backgroundColorStyle}>
      <SocialMedia active={idName}/>

      <div className='app__wrapper app__flex' >
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