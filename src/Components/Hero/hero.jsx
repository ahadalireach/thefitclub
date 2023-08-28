import React from 'react';
import "./hero.css"
import Header from '../Header/header'
import hero_img from "../../assets/hero_image.png"
import hero_img_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import NumberCounter from 'number-counter';
import { motion } from 'framer-motion';

const Hero = () => {

  const transition = {
    type: 'string', duration: 3
  }

  return (
    
    <div className='hero' id='hero'>
{/* Blur  */}
      <div className="blur hero-blur"></div>

        <div className="left-hero">

          <Header />
{/* The best ad */}
          <div className="the-best-ad">
            <motion.div
              initial={{left: '238px'}}
              whileInView={{left: '8px'}}
              transition={transition}
            >

            </motion.div>
            <span>The Best Fitness Club In The Town</span>
          </div>

{/* Hero heading */}
          <div className="hero-heading">

            <div>
              <span className='stroke-text'>SHAPE</span>
              <span> YOUR</span>
            </div>

            <div>
              <span>IDEAL BODY</span>
            </div>

            <div>
              <span>
                In here we will help you to shape and build your ideal body and live up your life to fullest
              </span>
            </div>

          </div>

{/* Figures */}
          <div className="figures">

            <div>
              <span>
                <NumberCounter end={140} start={108} delay="4" prefix="+" />
              </span>
              <span>expert coaches</span>
            </div>

            <div>
              <span>
                <NumberCounter end={978} start={800} delay="4" prefix="+" />
              </span>
              <span>members joined</span>
            </div>

            <div>
              <span>
                <NumberCounter end={50} start={32} delay="4" prefix="+" />
              </span>
              <span>Fitness Programs</span>
            </div>

          </div>

{/* Buttons */}
          <div className="hero-buttons">
            <button>
              Get Started
            </button>
            <button>
              Learn More
            </button>
          </div>  
        </div>
        
        <div className="right-hero">

          <button>Join Now</button>

{/* Heart Rate */}
          <motion.div 
            className="heart-rate"
            initial={{right: '-1rem'}}
            whileInView={{right: '4rem'}}
            transition={transition}>

            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>

          </motion.div>

{/* Hero Images  */}
          <img src={hero_img} alt="" className='hero-img' />
          <motion.img
            initial={{right: '11rem'}}
            whileInView={{right: '20rem'}}
            transition={transition}
           src={hero_img_back}
           alt="" 
           className='hero-img-back'
          />

          {/* Calories */}
          <motion.div 
            initial={{right: '37rem'}}
            whileInView={{right: '28rem'}}
            transition={transition}
            className="calories">

            <img src={Calories} alt="" />
            
            <div>
              <span>calories burned</span>
              <span>220 kcal</span>
            </div>

          </motion.div>

        </div>

    </div>

  )
}

export default Hero;