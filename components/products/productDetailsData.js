import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartState } from '../../App';
import RecommendedProducts from './RecommendedProducts';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { toast} from 'react-toastify';


const ProductDetailsData = ({data}) => {
    const [activeImg, setActiveImg] = useState(null)
    const {state,dispatch} = CartState()
    const [quantity,setQuantity] = useState(0)

    
    useEffect(()=>{
      
        state.cart.products.filter((p)=>p.id===data.id).length !==0?
        setQuantity(state.cart.products.filter((p)=>p.id===data.id)[0].quantity)
      :
      setQuantity(0)
      
    },[state.cart])

    useEffect(()=>{
      setActiveImg(data.images[0])
      state.cart.products.filter((p)=>p.id===data.id).length !==0?
       setQuantity(state.cart.products.filter((p)=>p.id===data.id)[0].quantity)
      :
      setQuantity(0)

    },[data])

  const addToCart = ()=>{
    setQuantity(1)
    dispatch({
      type:'ADD_TO_CART',
      payload:{
        id:data.id,
        title:data.title,
        img:data.thumbnail,
        price:data.price,
        quantity:1
      }
    })
    
    toast.success('Added to cart')
  }
  const removeFromCart = ()=>{
    setQuantity(0)
    dispatch({
      type:'REMOVE_FROM_CART',
      payload:{
        id:data.id
      }
    })
    toast.error('Removed from cart')
  }
  const changeQuantity = (value)=>{
    setQuantity(value)
    dispatch({
        type:'CHANGE_QUANTITY',
        payload:{
            id:data.id,
            quantity: value
        }
    })
  }

    const setImage = (img) => {
        setActiveImg(img)
    }
    return (
        <div>
          <div id="product__data">
              <div className="product__images padding">
                  <div id="active__img">
                      <img src={activeImg}
                          alt={
                              data.title
                          }/>
                  </div>
                  <div id="img__thumbnails">
                      {
                      data.images.map((img, i) => {
                          return (
                              <div key={i}
                                  className={
                                      `product__thumbnail ${
                                          activeImg === img ? 'activeImg' : ''
                                      }`
                                  }
                                  onMouseOver={
                                      () => setImage(img)
                              }>
                                  <img src={img}
                                      alt={
                                          data.title
                                      }/>
                              </div>
                          )
                      })
                  } </div>
              </div>
              <div className="product__details padding">
                <div>
                  <h5 className='product__brand'>
                    {
                      data.brand
                    }
                  </h5>
                  <h3> 
                    {
                      data.title
                    } 
                    <small className='product__rating'>
                      <StarRateRoundedIcon/>{
                        (Math.round((data.rating*10))/10).toFixed(1)
                      }
                    </small>
                  </h3>
                </div>
                  <div>
                    <Link to={`/category/${data.category}`}>
                      <small className='d-flex align-center'>
                        {data.category} <LaunchRoundedIcon fontSize='16px'/>
                      </small>
                    </Link>
                  </div>
                  <p> 
                    {
                      data.description
                    } 
                  </p>
                  <div>
                    <div>
                      <small>
                          <strike>
                              ${
                              Math.ceil(data.price * 100 / (100 - data.discountPercentage))
                          } </strike>
                          <span className='product__discount'>
                            {data.discountPercentage}% off
                          </span>
                      </small>
                    </div>
                    <div>
                        <small>
                            <b>
                                ${
                                data.price
                            } </b>
                        </small>
                    </div>
                  </div>
                  <div>
                    {
                      data.stock <50?
                      <small className='few__stock d-flex align-center'><ReportRoundedIcon fontSize='16px' color='danger' /> Few stocks left!</small>
                      :
                      <small className='running__out'><WarningRoundedIcon fontSize='16px' color='warning'/> Hurry! Stock running out quickly</small>
                    }
                  </div>

                  <div>
                    {
                      state.cart.products.some(product=>product.id===data.id)?
                      <div className="quantity__btns"> 
                        {
                            quantity>1?
                            <div className="quantity__btn quantity__btn__product" onClick={()=>changeQuantity(quantity-1)} >-</div>
                            :
                            <div className="quantity__btn quantity__btn__product remove" onClick={()=>removeFromCart()}><DeleteOutlineOutlinedIcon/></div>
                        }
                        <small>{quantity}</small>
                        <div className="quantity__btn quantity__btn__product" onClick={()=>changeQuantity(quantity+1)} >+</div>
                      </div>
                      :
                      <div className="add__to__cart" onClick={()=>addToCart()}>
                        <AddShoppingCartOutlinedIcon/>Add to cart
                      </div>
                    }
                  </div>
              </div>
          </div>
          <div id="recommended__products__data" className='mt padding'>
              <h3>Similar Products</h3>
              <RecommendedProducts category={data.category} id={data.id} />
          </div>
        </div>
    )
}

export default ProductDetailsData
