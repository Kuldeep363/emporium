import React from 'react'
import Banner1 from '../../assets/images/banner1.webp'

const Banner = () => {
  return (
    <div id='banner'>
        <div className="slide">
            <img src={Banner1} alt="eCommerce website" width='100%'/>
        </div>
    </div>
  )
}

export default Banner