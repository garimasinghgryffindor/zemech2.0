import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <img 
            className='header__logo'
            src={process.env.PUBLIC_URL + "/Logo_circle.png"}
            alt="logo"
         />

         <div className='header__nav'>
            <div className='header__option'>
                {/* Products */}
                <span className='header__line'>Products</span>
            </div>

            <div className='header__option'>
                {/* Company */}
                <span className='header__line'>Company</span>
            </div>

            <div className='header__option'>
                {/* Blog */}
                <span className='header__line'>Blog</span>
            </div>

         </div>
    </div>
  )
}

export default Header