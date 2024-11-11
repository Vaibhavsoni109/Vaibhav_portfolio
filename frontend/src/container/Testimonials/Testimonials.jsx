import React from 'react'
import './Testimonials.scss'
import MotionWrap from '../../wrapper/MotionWrap';
import AppWrap from '../../wrapper/AppWrap';
const Testimonials = () => {
  return (
    <div>
      tetstimonials
    </div>
  )
}

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
