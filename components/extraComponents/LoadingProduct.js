import React from 'react'
import './Loading.css'

const LoadingProduct = () => {
  return (
    <div id='product__details__loading'>
      <div id="product__data">
        <div className="product__images padding">
            <div id="active__img">
                <div className=" sk-card img anim"></div>
            </div>
            <div id="img__thumbnails">
                <div className="product__thumbnail">
                    <div className="img anim"></div>
                </div>
                <div className="product__thumbnail">
                    <div className="img anim"></div>
                </div>
                <div className="product__thumbnail">
                    <div className="img anim"></div>
                </div>
                <div className="product__thumbnail">
                    <div className="img anim"></div>
                </div>
                <div className="product__thumbnail">
                    <div className="img anim"></div>
                </div>

            </div>
        </div>
        <div className="product__details padding">
            <div className="loading__text anim"></div>
            <div className="small__loading__text anim"></div>
            <div className="small__loading__text anim"></div>
            <div className="loading__text anim"></div>
            <div className="loading__text anim"></div>
            <div className="small__loading__text anim"></div>
            <div className="loading__text anim"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingProduct
