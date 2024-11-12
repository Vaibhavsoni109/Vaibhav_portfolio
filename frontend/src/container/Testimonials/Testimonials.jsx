import React, { useEffect, useState } from 'react'
import './Testimonials.scss'
import MotionWrap from '../../wrapper/MotionWrap';
import AppWrap from '../../wrapper/AppWrap';
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi';
import { urlFor, client } from '../../client';
import {motion} from 'framer-motion'

const Testimonials = () => {
  const [brands, setbrands] = useState([])
  const [testimonials, setTestimonials] = useState([])
const [currentIndex, setcurrentIndex] = useState(0);

const handleClick = (index) => {
  setcurrentIndex(index);
};
useEffect(() => {
  const query = '*[_type == "testimonials"]';
  const brandsQuery = '*[_type == "brands"]';

  client.fetch(query).then((data) => {
    setTestimonials(data);
  });

  client.fetch(brandsQuery).then((data) => {
    setbrands(data);
  });
}, []);
const test=testimonials[currentIndex];

  return (
    <>
     {testimonials?.length &&(
      <>
      <div className="app__testimonial-item app__flex">
        <img src={urlFor(testimonials[currentIndex].imgurl)} alt="testimonials" />
        <div className="app__testimonial-icon">
          <p className="p-text">{testimonials[currentIndex].feedback}</p>
          <div>
            <h4 className="bold-text">
              {test.name}
            </h4>
            <h5 className="p-text">
              {test.company}
            </h5>
          </div>
        </div>
      </div>
      <div className="app__testimonial-btns app__flex">
        <div className="app__flex" onClick={()=>handleClick(currentIndex===0?testimonials.length-1:currentIndex-1)}>
<HiChevronLeft/>
        </div>
        <div className="app__flex" onClick={()=>handleClick(currentIndex===testimonials.length-1?0:currentIndex+1)}>
<HiChevronRight/>
        </div>
      </div>
  
      </>
     )}
       <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
