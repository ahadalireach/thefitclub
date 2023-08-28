import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import "./header.css";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='header'>
      <img src={Logo} alt="" className='header-logo' />
      {(menuOpened === false && mobile) ?
       <div
        className='header-nav' 
        style={{background: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px'}}
        onClick={() => setMenuOpened(true)}>
        <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}} />
       </div>
       
       : 
       
       <ul className='header-nav'>
          <li onClick={() => setMenuOpened(false)}>
            <Link 
             activeClass='active'
             to='hero'
             span={true}
             smooth={true}
             onClick={() => setMenuOpened(false)}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link 
             to='programs'
             span={true}
             smooth={true}
             onClick={() => setMenuOpened(false)}
            >
              Programs
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link 
             to='reasons'
             span={true}
             smooth={true}
             onClick={() => setMenuOpened(false)}
            >
              Why us
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link 
             to='plans'
             span={true}
             smooth={true}
             onClick={() => setMenuOpened(false)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link 
             to='testimonial'
             span={true}
             smooth={true}
             onClick={() => setMenuOpened(false)}
             >
              Testimonials
            </Link>
          </li>
          <li>
            <Link 
             to='join'
             span={true}
             smooth={true}
             onClick={() => setMenuOpened(false)}
             >
              Join Us
            </Link>
          </li>
         </ul>
       
       }
    </div>
  );
};

export default Header;
