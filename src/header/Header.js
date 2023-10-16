import React from 'react'
import "./header.css"
import logo from "./evangadi-logo-home (1).png"
const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="logo-wrapperss">
          <div className="header-img">
            <img src={logo} />
          </div>
        </div>
        {/* left-wrapper */}
        <div className="right-wrapperss">
          <div className="home">Home</div>
          <div className="how">How it Works</div>
          <div className='sign'>
            <button>SIGN IN</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header