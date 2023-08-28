import React from 'react'
import "./plans.css"
import { plansData} from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"

const Plans = () => {
  return (
    <div className="plans-container">

      <div className="blur plan-blur1"></div>
      <div className="blur plan-blur2"></div>

      <div className="programs-header" style={{gap: '2rem'}}>
        <span className='stroke-text'>Ready to start</span>
        <span> your journey </span>
        <span className='stroke-text'>now withus</span>
      </div>

      <div className="plans">
        {plansData.map((plans, index) => (

          <div className="plan" key={index}>
            {plans.icon}
            <span>{plans.name}</span>
            <span>$ {plans.price}</span>

            <div className="features">
              {plans.features.map((feature, index) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={index}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See More benefite </span>
            </div>

            <button className='plans-btn'>Join Now</button>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Plans;