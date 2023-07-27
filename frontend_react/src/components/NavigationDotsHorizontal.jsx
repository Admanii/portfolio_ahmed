import React from 'react'

const NavigationDotsHorizontal = ({ array, active }) => {
    // console.log("Other Side", array)
    return (
        <div className='app__navigation-horizontal'>
            {array.map((item, index) => (
                <a
                    key={item + index}
                    className='app__navigation-dot-horizontal'
                    style={active=== index ? { backgroundColor: '#313BAC' } : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDotsHorizontal