import React from 'react'
import iconData from './../icon_data';
import './../style/main_header.css';

function MainHeader() {
  return (
    <header>
        <div className="banner">
          <div className="banner_container">
            <h1>Teknolojik Yemekler</h1>
            <span className='satisfy'>fırsatı kaçırma</span>
            <span className='same_span'>KOD ACIKTIRIR</span>
            <span className='same_span'>PIZZA,DOYURUR</span>
            <button>ACIKTIM</button>
          </div>
        </div>
        <nav>
          <div className="navbar">
            {
            iconData.map((item,index) => {
              return(
                  <div key={index} className = 'svg' ><img src={item.icon} alt="icoonn" width = '32' height = '32' /><li>{item.contentName}</li></div>
               )
             })
            }
          </div>
        </nav>
      </header>
  )
}
export default MainHeader;