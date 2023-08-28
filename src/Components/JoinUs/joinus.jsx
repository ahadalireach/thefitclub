import React, { useRef } from 'react'
import "./joinus.css"
import emailjs from '@emailjs/browser';

const JoinUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ktbi0re', 'template_16zpgor', form.current, 'CzJOJc2NVUuxaLoTa')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="join" id="join">

        <div className="left-join">
            <hr />
            <div>
                <span className='stroke-text'>Ready to</span> 
                <span>level up</span>
            </div>
            <div>
                <span>your body</span> 
                <span className='stroke-text'>with us?</span>
            </div>
        </div>

        <div className="right-join">

            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" placeholder='Enter Your Email Address To Join' name='user_email' />
                <button className='join-btn'>Join Now</button>
            </form>
        </div>

    </div>
  )
}

export default JoinUs;