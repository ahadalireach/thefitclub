import React, { useState } from 'react'
import "./testimonial.css"
import { testimonialsData } from '../../data/testimonialsData';
import rightArrow from "../../assets/rightArrow.png"
import leftArrow from "../../assets/leftArrow.png"
import { motion } from 'framer-motion';

const Testimonials = () => {

  const [selected, setSelected] = useState(0)
  const length = testimonialsData.length;

  const transition = {
    type: 'string', duration: 3
  }

  return (
    <div className="testimonial">

      <div className="left-test">

        <span>Testimonials</span>
        <span className='stroke-text'>What They</span>
        <span> Say About Us</span>

        <span>
            {testimonialsData[selected].review}
        </span>            
        <span>
            <span style={{color: 'var(--orange)'}}>{testimonialsData[selected].name} </span>
            - {testimonialsData[selected].status}
        </span>

      </div>

      <div className="right-test">
            
            <motion.div
              initial={{opacity: 0, x: -100}}
              whileInView={{opacity: 1, x: 0}}
              transition={{...transition, duration: 2}}
              >

            </motion.div>
            <motion.div
              initial={{opacity: 0, x: 100}}
              whileInView={{opacity: 1, x: 0}}
              transition={{...transition, duration: 2}}
            ></motion.div>
            <img src={testimonialsData[selected].image}  alt={testimonialsData[selected].name} />

            <div className="arrows">

            <img
              src={leftArrow}
              alt="Previous"
              onClick={() =>
                selected === 0
                  ? setSelected(length - 1)
                  : setSelected((prev) => prev - 1)
              }
            />

            <img
              src={rightArrow}
              alt="Next"
              onClick={() =>
                selected === length - 1
                  ? setSelected(0)
                  : setSelected((prev) => prev + 1)
              }
            />
                  
            </div>

        </div>

    </div>
  )
}

export default Testimonials;