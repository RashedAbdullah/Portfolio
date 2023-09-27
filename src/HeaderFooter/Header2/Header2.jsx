import React from 'react';
import './Header2.css';

const Header2 = () => {
  return (
    <div className='HeaderMainDiv'>
        <div className="nav">

            <div className="iconName">

                <div className="icon"></div>

                <div className="name">
                    <p className='nameP1'>Abdul Ahad Rashed</p>
                    <p className='nameP2'>(Rashed Abdullah)</p>
                </div>
            </div>


            <div className="forLangAndDarkMode">

                <div className="language">
                    <div className="english">
                        <p>English</p>
                    </div>
                    <div className="arabic">
                        <p>العربية</p>
                    </div>
                </div>

                <div className="darkLightMode">
                    <span><i class="fa-solid fa-circle-half-stroke"></i></span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Header2