import React from 'react'
import "./programs.css"
import { programsData } from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png"

const Programs = () => {
  return (
    <div className="programs">

{/* Header  */}
        <div className="programs-header">

            <span className='stroke-text'>Explore</span>
            <span> Programs </span>
            <span className='stroke-text'> To Shape You</span>

        </div>

{/* Program Categories  */}
        <div className="programs-categories">

            {programsData.map((program) => (
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="programs-btn">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            ))}

        </div>

    </div>
  )
}

export default Programs;