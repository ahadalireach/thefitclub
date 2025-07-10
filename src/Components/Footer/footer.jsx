import React from 'react'
import "./footer.css"
import gitHub from "../../assets/github.png"
import insta from "../../assets/instagram.png"
import linkedIn from "../../assets/linkedin.png"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    
    <div className="footer-container">
        <hr />
        
        <div className="footer">
            
            <div className="social-links">
                <a href="https://github.com/bfmahad" ><img src={gitHub} alt="Github" style={{width: '30px'}} /></a>
                <a href="https://www.instagram.com/absolutely_ahadali/" ><img src={insta} alt="Instagram" style={{width: '30px'}} /></a>
                <a href="https://linkedin.com/bfmahad" ><img src={linkedIn} alt="Github" style={{width: '30px'}} /></a>
            </div>
            <h3 className='footer-text'>Create With ❤ By Ahad Ali</h3>

            <div className="logo-footer">
                <img src={logo} alt="" />
            </div>

        </div>

        <div className="blur footer-blur1"></div>
        <div className="blur footer-blur2"></div>

    </div>

  )
}

export default Footer;