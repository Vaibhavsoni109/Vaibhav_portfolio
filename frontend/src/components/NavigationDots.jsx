import React from 'react'


const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'work', 'skills', 'Testimonials', 'contact'].map((item, index) =>
            (

                <a
                    key={item + index}
                    className='app__navigation-dot'
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                    href={`#${item}`} />

            ))}

        </div>
    )
}

export default NavigationDots
