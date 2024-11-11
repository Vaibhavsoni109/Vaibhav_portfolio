import React from 'react'
import './Footer.scss'
import MotionWrap from '../../wrapper/MotionWrap';
import AppWrap from '../../wrapper/AppWrap';
const Footer = () => {
  return (
    <div>
      Footer
    </div>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
